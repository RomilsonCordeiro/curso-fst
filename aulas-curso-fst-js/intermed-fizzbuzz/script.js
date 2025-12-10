let array = [];
let num = 1;

function fizzBuzz() {
  if (num % 3 == 0 && num % 5 == 0) {
    array.push("FizzBuzz");
  } else if (num % 3 == 0) {
    array.push("Fizz");
  } else if (num % 5 == 0) {
    array.push("Buzz");
  } else {
    array.push(num);
  }
  num++;
}
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
console.log(array);
