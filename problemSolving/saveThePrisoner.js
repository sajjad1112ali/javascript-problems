function saveThePrisoner(n, m, s) {
  return (m - 1  + s - 1 ) % n + 1
}
// const n = 7, m = 19, s = 2;
const n = 5, m = 2, s = 1;
// 3
// const n = 3, m = 7, s = 3;
console.log(saveThePrisoner(n, m, s));
