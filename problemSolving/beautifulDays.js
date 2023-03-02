function range(min, max) {
  var len = max - min + 1;
  console.log(len)
  var arr = new Array(len);
  for (var i=0; i<len; i++) {
    let num = min + i;
    arr[i] = num+'';
  }
  return arr;
}

function beautifulDays(i, j, k) {
  let beautifulDaysCount = 0
  const numbersArray = range(i, j)
  console.log(numbersArray)
  numbersArray.map((num) => {
    const reversed = num.split('').reverse().join('');
    const difference = (num - reversed) % k;
    if (difference === 0) beautifulDaysCount +=1;
  })
  return beautifulDaysCount;
}

console.log(beautifulDays(20, 23, 6));