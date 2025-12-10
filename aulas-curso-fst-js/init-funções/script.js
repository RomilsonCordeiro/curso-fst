/* Primeiro será uma função sem parâmetro definido. 
Essa função vai somar os valores de x e y.*/
function somar() {
  let x = 1;
  let y = 5;
  console.log(x + y);
}
somar(); /* Aqui chamei a função para que ela seja executada ao rodar o código */
/* Nessa função, para mudar os valores somados, é necessário mudar o valor das variáveis. */

/* Agora uma função com parâmetros definidos. */
function somarNum(a, b) {
  console.log(a + b);
}
somarNum(4, 5);
/* Aqui ao chamar a função, basta definir os parâmetros, nesse caso os números que serão somados */
