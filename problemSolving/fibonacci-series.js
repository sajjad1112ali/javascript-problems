function fibonacciSeries(n) {
  let firstNumber = 1;
  let secondNumber = 0;
  let nextNumber = 0;
  for (let i = 0; i < n; i++) {
    nextNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = nextNumber;
  }
  return secondNumber;
}

const number = 7;
console.log(fibonacciSeries(number));
// 1 1 2 3 5 8 13 21 34
