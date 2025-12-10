let array = ["Romilson", "Lula", "Bolsonaro"];

function quemPaga() {
  let numeroAleatorio = Math.floor(Math.random() * array.length);
  let nome = array[numeroAleatorio];
  return `${nome} vai pagar a conta.`;
}
console.log(quemPaga());
