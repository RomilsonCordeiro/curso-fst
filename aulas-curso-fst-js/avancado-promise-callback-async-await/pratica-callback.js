/* Exercício 01: Simular o carregadmento de uma pagina
e quando carregar mostrar a mensagem 'página carregada com sucesso'.

  Exercício 02: Criar um callback anônimo.*/

//Ex 01: Criando a faunção callback

function carregarPagina(msgCarregando, cb) {
  console.log(msgCarregando);
  setTimeout(() => {
    cb();
  }, 5000);
}
//Essa é a função principal na qual o cb está dentro.

function paginaCarregada() {
  console.log("Página carregada com sucesso");
}
//Aqui crio o cb que foi usado.

carregarPagina("Carregando pagina...", paginaCarregada);
//Aqui ao chamar a função, passo a função paginaCarregada(cb) como argumento.

//Ex 02: Callback anônimo.

function pintarCamisa(corCamisa, callback) {
  console.log(`Pintando sua camisa da cor ${corCamisa}...`);
  callback();
}
//Essa é a função principal.

pintarCamisa("Vermelha", () => {
  setTimeout(() => {
    console.log("Sua camisa foi pintada com sucessso");
  }, 10000);
});
/*Aqui ao chamar a função, crio o uma função(cb) sem nome como argumento.
  Isso é um cb anônimo.*/

//Cronometro. Vai explodir!!!

let tempo = 0;

function bomba(cb) {
  console.log("A bomba vai explodir em 20 segundos!!!");
  cb();
}

function cronometro() {
  let timer = setInterval(() => {
    tempo++;
    const min = String(Math.floor(tempo / 60)).padStart(2, "0");
    const sec = String(Math.floor(tempo % 60)).padStart(2, "0");
    console.log(`${min}:${sec}`);
    if (sec === "20") {
      clearInterval(timer);
      console.log("KABOOOOOOOOMMMMM!!!");
    }
  }, 1000);
}

bomba(cronometro);
