// Prices and calculations use integer centavos, never floating-point peso arithmetic.
const products = [
  { id: 'pandesal', name: 'Pandesal (pack of 5)', price: 2500, icon: '🥖' },
  { id: 'ensaymada', name: 'Ensaymada', price: 2000, icon: '🥐' },
  { id: 'spanish-bread', name: 'Spanish Bread', price: 1500, icon: '🍞' },
  { id: 'cupcake', name: 'Chocolate Cupcake', price: 3000, icon: '🧁' },
  { id: 'loaf', name: 'Loaf Bread', price: 5500, icon: '🍞' },
  { id: 'coffee', name: 'Brewed Coffee (cup)', price: 2500, icon: '☕' },
];

function pesos(centavos) {
  return `₱${(centavos / 100).toFixed(2)}`;
}

function orderLines(cart) {
  return products.filter(product => cart[product.id]).map(product => ({
    id: product.id, name: product.name, price: product.price,
    quantity: cart[product.id], subtotal: product.price * cart[product.id],
  }));
}

function orderTotal(lines) {
  return lines.reduce((sum, line) => sum + line.subtotal, 0);
}

// Parse text before Number() so blanks, exponents and fractional centavos cannot slip through.
function parseCash(raw) {
  const value = String(raw).trim();
  if (!/^(?:\d+)(?:\.\d{1,2})?$/.test(value)) return null;
  const [whole, fraction = ''] = value.split('.');
  const cents = Number(whole) * 100 + Number(fraction.padEnd(2, '0'));
  return Number.isSafeInteger(cents) ? cents : null;
}

function validateCash(raw, total) {
  const amount = parseCash(raw);
  if (amount === null) return { error: 'Please enter a valid payment amount (up to two decimal places).' };
  if (amount < total) return { error: `Insufficient payment. Please enter at least ${pesos(total)}.` };
  return { amount };
}

if (typeof document !== 'undefined') {
  const byId = id => document.getElementById(id);
  const grid = byId('products');
  const cartView = byId('cart');
  const count = byId('cart-count');
  const totalView = byId('total');
  const cash = byId('cash');
  const form = byId('payment-form');
  const checkout = byId('checkout');
  const errorView = byId('payment-error');
  const feedback = byId('feedback');
  const receiptView = byId('receipt');
  const newButton = byId('new-transaction');
  let cart = {};
  let receipt = null;

  grid.innerHTML = products.map(product => `
    <article class="product-card">
      <span class="product-icon" aria-hidden="true">${product.icon}</span>
      <h3>${product.name}</h3>
      <div class="product-bottom"><span class="price">${pesos(product.price)}</span>
        <button class="add-button" type="button" data-add="${product.id}" aria-label="Add ${product.name}">+ Add item</button>
      </div>
    </article>
  `).join('');

  function message(text = '', isError = false) {
    feedback.hidden = !text;
    feedback.textContent = text;
    feedback.classList.toggle('error-feedback', isError);
  }

  function paymentError(text = '') {
    errorView.hidden = !text;
    errorView.textContent = text;
    if (text) cash.setAttribute('aria-invalid', 'true');
    else cash.removeAttribute('aria-invalid');
  }

  function render() {
    const lines = orderLines(cart);
    const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
    count.textContent = `${itemCount} ${itemCount === 1 ? 'item' : 'items'}`;
    totalView.textContent = pesos(orderTotal(lines));
    cartView.innerHTML = lines.length ? lines.map(line => `
      <div class="cart-row">
        <div><h3>${line.name}</h3><p class="unit-price">${pesos(line.price)} each</p>
          <div class="cart-actions"><div class="qty-control" aria-label="${line.name} quantity">
            <button type="button" data-decrease="${line.id}" aria-label="Decrease ${line.name} quantity" ${receipt || line.quantity === 1 ? 'disabled' : ''}>−</button>
            <span>${line.quantity}</span>
            <button type="button" data-increase="${line.id}" aria-label="Increase ${line.name} quantity" ${receipt ? 'disabled' : ''}>+</button>
          </div><button type="button" class="remove-button" data-remove="${line.id}" aria-label="Remove ${line.name}" ${receipt ? 'disabled' : ''}>Remove</button></div></div>
        <span class="line-subtotal">${pesos(line.subtotal)}</span>
      </div>
    `).join('') : '<div class="empty-cart"><span class="empty-icon" aria-hidden="true">🧺</span><strong>Your cart is empty</strong><p>Add a bakery favorite to get started.</p></div>';
    grid.querySelectorAll('[data-add]').forEach(button => { button.disabled = Boolean(receipt); });
    cash.disabled = Boolean(receipt);
    checkout.disabled = Boolean(receipt);
    newButton.hidden = !receipt;
  }

  grid.addEventListener('click', event => {
    const button = event.target.closest('[data-add]');
    if (!button || receipt) return;
    const product = products.find(item => item.id === button.dataset.add);
    if (!product) return;
    cart[product.id] = (cart[product.id] || 0) + 1;
    paymentError();
    message(`${product.name} added to your order.`);
    render();
  });

  cartView.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button || receipt) return;
    const id = button.dataset.increase || button.dataset.decrease || button.dataset.remove;
    if (!Object.hasOwn(cart, id)) return;
    if (button.dataset.remove) delete cart[id];
    else if (button.dataset.increase) cart[id] += 1;
    else if (cart[id] > 1) cart[id] -= 1;
    paymentError();
    message('Order updated.');
    render();
    // Re-render replaces buttons; return keyboard focus to the updated control.
    if (button.dataset.remove) grid.querySelector(`[data-add="${id}"]`).focus();
    else {
      const action = button.dataset.increase ? 'increase' : 'decrease';
      const target = cartView.querySelector(`[data-${action}="${id}"]`);
      (target.disabled ? cartView.querySelector(`[data-increase="${id}"]`) : target).focus();
    }
  });

  cash.addEventListener('input', () => paymentError());
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (receipt) return; // A paid transaction cannot be charged or edited again.
    const lines = orderLines(cart);
    if (!lines.length) {
      message('Add an item before confirming payment.', true);
      return;
    }
    const total = orderTotal(lines);
    const result = validateCash(cash.value, total);
    if (result.error) {
      paymentError(result.error);
      message();
      return;
    }
    paymentError();
    const reference = `CB-${Date.now().toString(36).toUpperCase()}-${crypto.getRandomValues(new Uint32Array(1))[0].toString(36).toUpperCase()}`;
    // Copy paid values: future cart changes cannot recalculate an old receipt.
    receipt = { reference, lines: lines.map(line => ({ ...line })), total, paid: result.amount, change: result.amount - total };
    receiptView.innerHTML = `<h3>Payment complete ✓</h3><p class="receipt-ref">Transaction ${receipt.reference}</p>
      ${receipt.lines.map(line => `<div class="receipt-row"><span>${line.quantity} × ${line.name} · ${pesos(line.price)}</span><span>${pesos(line.subtotal)}</span></div>`).join('')}
      <div class="receipt-total"><span>Total</span><strong>${pesos(receipt.total)}</strong></div>
      <div class="receipt-row"><span>Cash paid</span><strong>${pesos(receipt.paid)}</strong></div>
      <div class="receipt-row"><span>Change</span><strong>${pesos(receipt.change)}</strong></div>`;
    receiptView.hidden = false;
    message(`Payment successful. Change: ${pesos(receipt.change)}.`);
    render();
  });

  newButton.addEventListener('click', () => {
    cart = {};
    receipt = null;
    cash.value = '';
    receiptView.innerHTML = '';
    receiptView.hidden = true;
    paymentError();
    message();
    render();
    grid.querySelector('[data-add]').focus();
  });
  render();
}

// Pure calculation functions are also tested directly with Node's built-in test runner.
if (typeof module !== 'undefined') module.exports = { products, pesos, orderLines, orderTotal, parseCash, validateCash };
