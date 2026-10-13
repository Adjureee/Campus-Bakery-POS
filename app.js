// All money values are integer centavos, not floating-point pesos.
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

const productGrid = document.querySelector('#products');
productGrid.innerHTML = products.map(product => `
  <article class="product-card">
    <span class="product-icon" aria-hidden="true">${product.icon}</span>
    <h3>${product.name}</h3>
    <div class="product-bottom"><span class="price">${pesos(product.price)}</span>
      <button class="add-button" type="button" data-add="${product.id}" aria-label="Add ${product.name}">+ Add item</button>
    </div>
  </article>
`).join('');
document.querySelector('#cart').innerHTML = '<div class="empty-cart"><span class="empty-icon" aria-hidden="true">🧺</span><strong>Your cart is empty</strong><p>Add a bakery favorite to get started.</p></div>';
