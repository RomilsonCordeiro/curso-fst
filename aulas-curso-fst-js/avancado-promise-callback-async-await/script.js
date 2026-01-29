// Callback:
/*Callback é uma função passada como argumento dentro de outra função
para ser chamado dentro dela.*/

const fs = require("fs");
/*O que é 'fs'? 
fs significa 'File System' no Node.js.
É uma biblioteca que permite interagir com
arquivos do computador. Possibilitando ler, gravar, atualizar
renomear e excluir arquivos e diretórios.*/

console.log(1);

/*fs.readFile("msg1.txt", (err, contents) => {
  console.log(String(contents));
});*/
/*Aqui está o 'Callback'.
 Primeiro o arquivo que será lido('msg1.txt')
depois os parâmetros(Callback sempre tem dois parâmetros)
o primeiro é o erro, caso aconteça. O segundo
é o contents, que é o conteúdo que será retornado.
 Para mostrar o que será retornado utilizo o 'String'
já que é uma string que está contida no conteúdo.
 Caso o 'String' não fosse utilizado, seria retornado o buffer
que é nada mais do que o endereço do espaço reservado
na memória do computador.
 Lembrando que o Callback sempre é retornado
após um processo. Ou seja, aqui ele será retornado
após os três 'console.log'.*/

console.log(2);
console.log(3);

//Promise:
/*Promisse permite tratar dados sem bloquear a execução do código
retornando um objeto que pode estar pendente, realizado ou rejeitado.*/

const readFile = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
      if (err) {
        reject(err);
      } else {
        resolve(contents);
      }
    });
  });

readFile("msg1.txt")
  .then((contents) => {
    console.log(String(contents));
    return readFile("msg2.txt");
  })
  .then((contents) => {
    console.log(String(contents));
  });
