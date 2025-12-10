let nome = "RoBERvaL";
let pzin = nome.slice(0, 1);
let pzao = pzin.toUpperCase();
let resto = nome.slice(1, nome.length);
/* Ao colocar 'nome.length', permite mostrar o texto sem um limite de caracteres.*/
resto = resto.toLowerCase();
/* 'resto.toLowerCase' para deixar o resto do texto automaticamente minúsculo */
console.log(pzao + resto);
