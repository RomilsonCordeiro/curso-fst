function tempoDeVida(idade) {
  let resto = 90 - idade;
  let dias = resto * 365;
  let semanas = resto * 52;
  let meses = resto * 12;
  console.log(
    "Você ainda tem " +
      dias +
      " dias, " +
      semanas +
      " semanas e " +
      meses +
      " meses de vida restantes."
  );
}
tempoDeVida(56);
