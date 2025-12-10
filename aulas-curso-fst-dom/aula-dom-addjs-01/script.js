/* Manipulando CSS com JS
Manipulando elementos direto no JS.*/

document.querySelector("h1").innerHTML = "Jesus te ama muito";
/* .querySelector() seleciona um elemento parente 
 do elemento selecionado. No caso o h1 pertencenete ao document. */

/* .innerHTML permite inserir um texto no elemento selecionado.*/

document.querySelector("#titulo").style.color;
/* Aqui através do DOM é possível mudar a cor do elemento. No caso o h1 */

document.getElementsByTagName("li")[1].style.color;
/* getElementsBy permite selecionar elementos de varias maneiras
   como id, tag, name, etc. Será selecionado todos os elementos iguais.
   Então deve-se determinar o elemento desejado colocando sua posição no array
   como feito no código acima.*/

document.getElementById("titulo").style.color;
/* getElementById é diferente dos outros getElementsBy.
   Isso por que ele seleciona apenas um único elemento,
   já que o Id é único. */

document.querySelector("li a");
/* Nesse exemplo estou selecionando o elemento 'a' que é filho do elemento 'li'.
   Respeitando a hierarquia dos elementos.
   Dessa maneira, se existir outro elemento 'a' fora das 'li',
   ele não será selecionado */

document.querySelector("li.item");
/* Nesse exemplo estou selecionando um elemento 'li' que possui a class item.*/

document.querySelectorAll("li.item");
/* Nesse exemplo utilizo o querySelectorAll
   que permite selecionar todos os elementos com os mesmo parâmetros. */

document.querySelectorAll("li.item")[1].style.color;
/* Nesse exemplo, ao específicar o elemento mudo a cor.*/

document.querySelector(".btn").style.backgroundColor = "#00FFD8";
/* Ex de mudar a cor do botão.
   No CSS utiliza o - para separar as palavras conjuntas.
   No JS utiliza o formato camelCase. */

document.querySelector(".btn").style.cursor = "pointer";

/* Manipulando CSS com JS.
Adicionando classes prontas pelo JS. */

document.querySelector(".btn").classList.add("hidden-btn");
/* classList mostra a lista de classes atribuidas ao elemento selecionado.
   classList.add() atribui uma classe ao elemento selecionado.*/

document.querySelector(".btn").classList.remove("hidden-btn");
/* classList.remove() remove uma classe atribuida ao elemento selecionado. */

document.querySelector(".btn").classList.toggle;
/* classList.toggle() alterna entre adicionar e remover a classe.
   Se existir ele remove, e se não existir ele adiciona.
   Como se fosse um botão de liga e desliga. */

document.querySelector("h1").classList.add("big");
/* Exercício: adicionar a classe big no h1. */

document.querySelector("h1").textContent = "Olá Mundo!";
/* textContent adiciona um texto no elemento selecionado.
   Diferente do innerHTML que adiciona um HTML completo.
   Ex: innerHTML = '<i>Olá Mundo!</i>' Dessa maneira ja vai
   adicionar o texto em italico.*/

document.querySelector("a").getAttribute("href");
/* getAttribute() pega um atributo do elemento selecionado.
   No caso aqui o href, ou mais precisamente o link contido nele.*/

document.querySelector("a").setAttribute("href", "https://www.youtube.com");
/* setAttribute() permite mudar o atributo do elemento selecionado.
'  No caso aqui, o link contido no href. */
