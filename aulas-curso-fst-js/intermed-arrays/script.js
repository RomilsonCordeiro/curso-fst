let bolas = ["bola", "bolona", "bolinha", "bolão"];
/* Arrays permitem fazer uma lista com varias coisas dentro */

let bolaUm = bolas[1];
/* Pode chamar um item específico de um array
chamando a varíavel e colocando seu indice.
Lembrando que o index do array sempre começa em zero (0,1,2,...).*/

console.log(bolaUm);

console.log(bolas.length);

console.log(bolas.includes("bolona"));
/* A função .includes() verifica se o item determinado existe dentro do array */

function noArray(nome) {
  let nomes = ["Romildo", "Pontas", "Loubinhas"];

  nomes.push("Bolsonaro");
  /* A função .push() adiciona um item ao array. */

  nomes.pop();
  /* A função .pop() remove o ultimo item do array. */

  if (nomes.includes(nome)) {
    return nome + " está na lista.";
  } else {
    return nome + " não está na lista.";
  }
}
console.log(noArray("Bolsonaro"));
