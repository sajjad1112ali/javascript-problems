function fibonacciSeries(n) {
  let arr = [0, 1]
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }
  return arr;
}

const number = 7;
console.log(fibonacciSeries(number).join(' '));
// 1 1 2 3 5 8 13 21 34
