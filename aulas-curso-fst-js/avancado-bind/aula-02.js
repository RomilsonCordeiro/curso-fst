// Resolvendo problema bind.

// Problema:

/*function Pessoa() {
  this.idade = 0;

  setInterval(function () {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}
new Pessoa();*/

// Resolução:

function Pessoa() {
  this.idade = 0;

  this.timer = setInterval(
    function () {
      this.idade++;
      if (this.idade <= 5) {
        console.log(this.idade);
      } else {
        console.log("Fim");
        clearInterval(this.timer);
      }
    }.bind(this),
    1000,
  );
}
new Pessoa();
