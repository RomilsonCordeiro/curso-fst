const product = [
  { name: "Iphone 8 Plus", price: 2680, fragile: true },
  { name: "Monitor LCD", price: 1998, fragile: true },
  { name: "Prato de Vidro", price: 5.8, fragile: true },
  { name: "Copo Plástico", price: 1.99, fragile: false },
];

/* Aula 03:
Criando a função filter() */

Array.prototype.filter2 = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
