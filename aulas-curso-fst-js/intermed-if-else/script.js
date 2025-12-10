/*function roll(){
    let num = Math.random() * 10
    num = Math.floor(num + 1)

    if (num === 10){
        console.log('Parabéns! Você tirou ' + num)
    } else {
        console.log('Que pena, você tirou ' + num  + '. ' + 'Continue tentando')
    }
}*/

function samugay() {
  let num = Math.random() * 10;
  num = Math.floor(num + 1);

  if (num % 2 === 0) {
    console.log("Samuca GAY");
  } else {
    console.log("Samuca PETISTA");
  }

  console.log(num);
}
samugay();
