function calcImc(peso, altura) {
  let imc = peso / Math.pow(altura, 2);
  return Math.round(imc);
}
console.log(calcImc(90, 1.78));
