function jogador(nome, idade, time, destaque) {
  (this.nome = nome),
    (this.idade = idade),
    (this.time = time),
    /* Após adiconar tudo que eu quero que o objeto possua
    eu adiciono agora o método. */
    (this.destaque = function () {
      console.log("Mais de 1000 gols na carreira.");
    });
  /* Método é uma função criada específica para o objeto. */
}
let jogador1 = new jogador("Pelé", 20, "Santos");
jogador1.destaque();
console.log(jogador1);
