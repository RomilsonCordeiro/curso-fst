// Aula de arrow function.

function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}
new Pessoa();

/* Utilizando o mesmo exercício da aula de bind
é possível ver que ao utilizar o arrow function
o this já é herdado da funcção Pessoa().
Isso acontece pois no arrow function o this recebe
o valor da primeira vez que foi usado. No caso
a função Pessoa().
Isso se chama contexto lexus. Que é onde
o this foi usado pela primeira vez.*/
