function saveThePrisoner(n, m, s) {
  const max = 1000000000;
  if ( n > max || m > max || n < 0 || n > 100) return 0
  let counter = 1;
  let startFrom;
  while (counter <= m) {
    if (counter === 1) startFrom = s;
    else startFrom += 1;

    if (startFrom === n) {
      if (counter != m) {
        startFrom = 0;
      }
    }
    counter += 1;
  }
  return startFrom;
}
const n = 7,
  m = 19,
  s = 2;
 //const n = 3, m = 7, s = 3;
console.log(saveThePrisoner(n, m, s));
