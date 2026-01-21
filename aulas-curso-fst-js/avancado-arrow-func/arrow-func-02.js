// Maneira de utilizar o arrow function.

// Ex 01: função normal sem arrow function.

/*let func01 = function (a, b) {
  return a + b;
};

console.log(func01(1, 2));*/

//Ex 02: arrow function simples.

/*let func02 = (a, b) => {
  return a + b;
};

console.log(func02(1, 2));*/

//Ex 03: arrow function sem return.

/*let func03 = (a, b) => a + b;

console.log(func03(1, 2));*/
/* A fazer a arrow function dessa maneira
o parâmetro fica implícito e não é necessário defini-lo. */

//Ex 04: arrow function com um parâmetro.

/*let func04 = (e) => e + 2;

console.log(func04(2));*/
// Os parênteses são opcionais.

//Ex 05: Sem parâmetros.

/*let func05 = () => {
  console.log("Olá Mundo!");
};
func05();*/

//Ex 06: criando objeto.

/*let func06 = () => ({ nome: "Lula", idade: 69, profissao: "Ladrão" });
console.log(func06());*/
// Dessa maneira deve-se sempre colocar os parênteses.
