const valores = [1, 2, 3, 4, 5];

/* Agora vou encadear funcoes map */

const sum10 = function (e) {
  return e + 10;
};

const triplo = function (e) {
  return e * 3;
};

const forMoney = function (e) {
  return `R$${parseFloat(e).toFixed(2).replace(".", ",")}`;
}; /* Nessa função uso o parseFloat() para transformar em numero
uso o toFixed() para que tenha duas casas decimais
e uso o replace para que troque o ponto por virgula.
 Já que no Brasil o real utiliza virgula para separar. */

let result = valores.map(sum10).map(triplo).map(forMoney);
/* Aqui encadeio os maps para que todos sejam aplicados em sequencia. */

console.log(result);
