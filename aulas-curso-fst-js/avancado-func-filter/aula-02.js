const product = [
  { name: "Iphone 8 Plus", price: 2680, fragile: true },
  { name: "Monitor LCD", price: 1998, fragile: true },
  { name: "Prato de Vidro", price: 5.8, fragile: true },
  { name: "Copo Plástico", price: 1.99, fragile: false },
];

/* Aula 02:
Criar um filtro que mostre os produtos maiores que 700 reais
e que são frágeis. */

let setecentosMais = function (e) {
  return e.price > 700;
}; /* Crio uma função que pega apenas os elementos
com preço maior que 700. */

let fragileProducts = function (e) {
  return e.fragile == true;
}; /* Crio uma função que pega apenas os elementos
que são frágeis. */

let twoFilteredProducts = product
  .filter(setecentosMais)
  .filter(fragileProducts);
/* Crio a variável que encadeia os dois filtros. */

console.log(twoFilteredProducts);
