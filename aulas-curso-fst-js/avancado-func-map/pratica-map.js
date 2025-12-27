const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Somando mais dois.

// Ex 01: Fazendo direto.

/*const plusTwo = numbers.map((e) => {
  return e + 2;
});*/

// Ex 02: Criando uma fnção que soma +2.

/*const sumTwo = function (e) {
  return e + 2;
};

let numberPlusTwo = numbers.map(sumTwo);*/

// Transformando em dinheiro

//Ex 01: Fazendo direto.

/*const forCash = numbers.map((e) => {
  return `R$${parseFloat(e).toFixed(2).replace(".", ",")}`;
});*/

//Ex 02: Criando uma função que transforma em dinheiro.

/*const forMoney = function (e) {
  return `R$${parseFloat(e).toFixed(2).replace(".", ",")}`;
};

let moneyNums = numbers.map(forMoney);*/

// JSON para JS.

const jsonArray = [
  '{"name": "prego", "price": 0.50}',
  '{"name": "marreta", "price": 25}',
  '{"name": "trena", "price": 15}',
  '{"name": "serrote", "price": 12.50}',
  '{"name": "mangueira", "price": 5}',
  '{"name": "escada", "price": 32.50}',
];

const objectArray = [
  { name: "arroz", price: 12.5 },
  { name: "feijão", price: 10.25 },
  { name: "leite", price: 6.45 },
  { name: "ovos", price: 30 },
];

// Ex 01: Criando uma função que transforma JSON para Objeto(JS).

/*const jsonForJs = function (e) {
  let jsArray = JSON.parse(e);
  return jsArray;
};

let stockItens = jsonArray.map(jsonForJs);*/

// Ex 02: Criando uma função que transforma Objeto(JS) para JSON.

/*const jsForJson = function (e) {
  let objJsArray = JSON.stringify(e);
  return objJsArray;
};

let marketListJson = objectArray.map(jsForJson);*/
