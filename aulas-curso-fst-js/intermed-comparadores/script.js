/* 
'typeof()' Para ver o tipo
'===' É igual a, mais o tipo
'==' É igual a, sem o tipo
'!==' É diferente de, mais o tipo
'>' Maior que
'<' Menor que
'>=' Maior ou igual a
'<=' Menor ou igual a
'&&' E (and)
'||' Ou (or)
'!' Não (not)
*/

/*
let a = 1;
let b = "1";
console.log(a == b);
console.log(a === b);
console.log(typeof a);
console.log(typeof b);
*/

function notas() {
  let nota = Math.random();
  nota = Math.floor(nota * 100 + 1);

  if (nota < 30) {
    return "Nota " + nota + ". Reprovado!";
  } else if (nota >= 30 && nota < 70) {
    return "Nota " + nota + ". Passou por pouco! Estude mais!";
  } else if (nota >= 70) {
    return "Nota " + nota + ". Aprovado!";
  }
}
console.log(notas());
