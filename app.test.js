const { test } = require('node:test');
const assert = require('node:assert/strict');
const { products, pesos, orderLines, orderTotal, parseCash, validateCash } = require('./app');

test('the six PDF products have stable IDs and exact centavo prices', () => {
  assert.deepEqual(products.map(({ id, name, price }) => [id, name, price]), [
    ['pandesal', 'Pandesal (pack of 5)', 2500],
    ['ensaymada', 'Ensaymada', 2000],
    ['spanish-bread', 'Spanish Bread', 1500],
    ['cupcake', 'Chocolate Cupcake', 3000],
    ['loaf', 'Loaf Bread', 5500],
    ['coffee', 'Brewed Coffee (cup)', 2500],
  ]);
});

test('the sample order has accurate rows, subtotals and total', () => {
  const lines = orderLines({ pandesal: 2, ensaymada: 1, coffee: 1 });
  assert.deepEqual(lines.map(({ quantity, subtotal }) => [quantity, subtotal]), [[2, 5000], [1, 2000], [1, 2500]]);
  assert.equal(orderTotal(lines), 9500);
  assert.equal(pesos(orderTotal(lines)), '₱95.00');
});

test('cash parser refuses blank, malformed, negative, fractional centavos and unsafe amounts', () => {
  for (const raw of ['', '  ', 'abc', '-5', '1e2', '12.345', 'NaN', '0x10', '9999999999999999999']) {
    assert.equal(parseCash(raw), null, raw);
  }
  assert.equal(parseCash('0'), 0);
  assert.equal(parseCash('95.0'), 9500);
  assert.equal(parseCash('100.00'), 10000);
  assert.equal(parseCash('0.01'), 1);
});

test('payment validation rejects insufficient and accepts exact and excess cash', () => {
  for (const raw of ['0', '94', '94.99']) assert.match(validateCash(raw, 9500).error, /Insufficient payment.*₱95\.00/);
  for (const raw of ['', 'abc', '-1', '95.001']) assert.match(validateCash(raw, 9500).error, /valid payment amount/);
  assert.equal(validateCash('95.00', 9500).amount - 9500, 0);
  assert.equal(validateCash('100.00', 9500).amount - 9500, 500);
});
