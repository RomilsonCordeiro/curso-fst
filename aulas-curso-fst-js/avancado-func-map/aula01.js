// Criando a primeira função map.

const numeros = [1, 2, 3, 4, 5]; // Array que vou utilizar.

let result = numeros.map(function (e) {
  return e * 2;
});
/* Essa função map vai multiplicar os números do meu array por 2.

 Na função map é como se tivesse um forEach embutido
ela vai pegar todos os indices do meu array
e rodar a função para cada um deles.

 Lembrando que o array original não é alterado
a função map cria um novo array a partir do primeiro.

 Ao criar a função para utilizar no map
 ela precisa ter um return. Caso contrário ela retornará undefined. */

console.log(result);
