function rolarDado() {
  let num = Math.random();
  num = num * 6;
  return Math.floor(num + 1);
}
console.log(rolarDado());
