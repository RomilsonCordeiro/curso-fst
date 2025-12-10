function anoBissexto(ano) {
  if (ano % 400 == 0) {
    return "O ano de " + ano + " é um ano bissexto.";
  } else if (ano % 4 == 0 && ano % 100 !== 0) {
    return "O ano de " + ano + " é um ano bissexto.";
  } else {
    return "O ano de " + ano + " não é um ano bissexto.";
  }
}
console.log(anoBissexto());
