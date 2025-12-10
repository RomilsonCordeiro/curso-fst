let array = [0, 1];

function fibonacci(n) {
  for (i = 2; i < n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  console.log(array);
}
fibonacci(20);
