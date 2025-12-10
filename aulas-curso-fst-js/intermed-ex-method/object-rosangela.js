function mulher(nome, idade, nacionalidade) {
  (this.nome = nome),
    (this.idade = idade),
    (this.nacionalidade = nacionalidade),
    (this.girar = function () {
      if (mulher1.nome == "Rosangela") {
        console.log("Planeta Rosangela");
      }
    });
}

let mulher1 = new mulher("Rosangela", 292, "Extraterrestre");
mulher1.girar();
