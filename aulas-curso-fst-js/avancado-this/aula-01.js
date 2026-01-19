/* This se refere ao 'dono' da execução atual.
Ele aponta para quem está chamando a função. */

//Ex 01: This em um objeto.

/*const pessoa = {
  nome: "Romilson",
  nomePessoa() {
    console.log(this.nome);
  },
};
pessoa.nomePessoa();*/

//Ex 02: This solto(fora de um objeto).

/*function mostrar() {
  console.log(this);
}
mostrar();*/
/* Nesse caso o This mostra a Window.
Sempre que chamado sem dono ele mostra a Window. */

//Ex 03: This em evento DOM.

/*const botao = document.querySelector("#botaoClick");

botao.addEventListener("click", function () {
  this.classList.toggle("toggleColor");
});*/

// Ex 04: This com arrow function.

/*const botao = document.querySelector("#botaoClick");

botao.addEventListener("click", () => {
  console.log(this);
});*/
/* Nesse exemplo o This não se refere ao botão, mas sim a
window. Arrow function não tem this próprio. Ela herda o this de fora. */
