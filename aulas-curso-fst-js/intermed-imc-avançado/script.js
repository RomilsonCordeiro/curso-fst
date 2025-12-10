function calcImc(peso, altura) {
  let imc = peso / Math.pow(altura, 2);
  imc = +imc.toFixed(1);
  /* 'toFixed' deixa o número com no máximo uma casa decimal */

  if (imc < 18.5) {
    return "Seu imc é de " + imc + ". Abaixo do peso!";
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "Seu imc é de " + imc + ". Peso normal.";
  } else if (imc > 24.9 && imc <= 29.9) {
    return "Seu imc é de " + imc + ". Sobrepeso!";
  } else if (imc > 29.9 && imc <= 34.9) {
    return "Seu imc é de " + imc + ". Obesidade Grau 1.";
  } else if (imc > 34.9 && imc <= 39.9) {
    return "Seu imc é de " + imc + ". Obesidade Grau 2.";
  } else if (imc >= 40) {
    return "Seu imc é de " + imc + ". Obesidade Mórbida";
  }
}
console.log(calcImc(32, 1.78));
