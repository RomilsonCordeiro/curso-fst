const msgFile = require("fs");
const caminhoBase = "../../../";

function promise01(msg01) {
  return new Promise((resolve, reject) => {
    msgFile.readFile(msg01, (err, conteudo) => {
      if (err) {
        reject("ERRO!");
      } else {
        resolve(conteudo);
      }
    });
  });
}

promise01(caminhoBase + "msg1.txt")
  .then((content) => {
    console.log(String(content));
  })
  .catch((err) => {
    console.log(String(err));
  });
