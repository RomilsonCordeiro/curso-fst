/* Aqui vou criar o meu proprio map() */

Array.prototype.meuMap = function (callback) {
  const newArray = []; // Cria um novo array.

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
    // Aqui ele adicona os elementos ao novo array.
  }
  return newArray;
};

const plusTwo = function (e) {
  return e + 2;
};

let num = [7, 2];

num = num.meuMap(plusTwo);

console.log(num);
