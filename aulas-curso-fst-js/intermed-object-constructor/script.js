/* Exemplo 1
Criando uma variavel para cada informação do jogador. */

let jogadorNome = "Pelé";
let jogadorIdade = 20;
let jogadorCopa = true;
let jogadorPaís = "Brasil";

console.log(
  "Informações do jogador: " + jogadorNome,
  jogadorIdade,
  jogadorCopa,
  jogadorPaís
);
/* Dessa maneira fica muito dificil de organizar e entender as infoirmações. */

/* Exemplo 2 
Criando um objeto para cada jogador.*/

let jogador1 = {
  nome: "Pelé",
  idade: 20,
  copaDoMundo: true,
  país: "Brasil",
};

console.log(jogador1.nome, jogador1.idade, jogador1.copaDoMundo, jogador1.país);
/* Dessa maneira é possível escolher cada informação do jogador através do DOM. */

/* Exemplo 3
Criando uma função que permite criar varios objetos com os mesmos tipos de informações. */

function JogadorInfo(nome, idade, copaDoMundo, país) {
  (this.nome = nome),
    (this.idade = idade),
    (this.copaDoMundo = copaDoMundo),
    (this.país = país);
}

let jogador2 = new JogadorInfo("Pelé", 20, "Sim", "Brasil");
console.log(jogador2);
