const calc = function () {
  let prom = window.prompt("Enter a digit from 1 to 100", "50");
  let N = 0;
  let p = 0;
  let i = 1;
  prom = Number(prom);
  if (prom < 101 && prom > 0) {
    for (; i <= prom; i++) {
      if (i % 2 === 0) continue;
      N += i;
      p += 1;
    }
    return console.log(N / p);
  }
  return console.log("You entered incorrect data");
};
export default calc;
