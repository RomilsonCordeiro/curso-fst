const product = [
  { name: "Iphone 8 Plus", price: 2680, fragile: true },
  { name: "Monitor LCD", price: 1998, fragile: true },
  { name: "Prato de Vidro", price: 5.8, fragile: true },
  { name: "Copo Plástico", price: 1.99, fragile: false },
];

/* Da mesma maneira que no map(), a func filter() cria um novo array
só que dessa vez filtrando os elementos. */

// Ex

let filtredProducts = product.filter((e) => {
  return e.price > 1000;
}); /* Crio de maneira direta uma variável que filtra
os produtos que tem preço maior que 1000. */

console.log(filtredProducts);
