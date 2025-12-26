const shoppingCart = [
  '{ "name": "Iphone", "price": 5894.00 }',
  '{ "name": "Caderno", "price": 13.90 }',
  '{ "name": "Bíblia", "price": 120.00 }',
  '{ "name": "Caneta", "price": 7.50 }',
];

const prices = shoppingCart.map((e) => {
  const products = JSON.parse(e);
  return products.price;
});

const pricesBrazil = prices.map((e) => {
  return `R$${parseFloat(e).toFixed(2).replace(".", ",")}`;
});

console.log(prices);
console.log(pricesBrazil);
