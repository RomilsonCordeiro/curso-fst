/* Bind serve para definir a quem o this representará. */

//Ex 01: Entendendo bind

/*const frase = {
  saudacao: "Jesus te ama muito",
  falar() {
    console.log(this.saudacao);
  },
};
frase.falar();*/
// Até aqui está tudo certo.

/*const dizer = frase.falar;
dizer();*/
/*Aqui já não funciona, pois o this está preso ao objeto frase.
Então ao atribuir a função falar() a função dizer,
o this passa a representar a função dizer.
então a função falar() não funciona mais já que não há uma saudação.*/

/*Então agora utlizando o bind é possível
atribuir um valor ao this. */

/*const dizer2 = frase.falar.bind(frase);
dizer2();*/
/* Dessa maneira é possível prender o this ao objeto pessoa.
Fazendo com que ao chamar a função dizer2 os parâmetros
sejam os mesmos da função falar dentro do objeto pessoa.*/
