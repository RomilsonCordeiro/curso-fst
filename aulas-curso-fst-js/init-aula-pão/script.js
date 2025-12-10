function dinheiro(dinheiro) {
  let preco = 1.5;
  let paes = Math.floor(dinheiro / preco);
  /* A função Math.floor arredonda pra baixo o número */
  let troco = dinheiro % preco;
  console.log(
    "Você comprou " + paes + " pães. E sobrou " + troco + " de troco"
  );
}
dinheiro(18);
