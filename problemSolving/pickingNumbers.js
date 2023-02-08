const isValid = (arr) => {
  if (arr.length <= 2 || arr.length >= 100) return false;
  return true;
};

const pickingNumbers = (arr) => {
  if (!isValid(arr)) return -1;
  const arrLengt = arr.length - 1;
  const subArrays = [];
  for (let k = 0; k < arrLengt; k++) {
    const pItem = arr[k];
    const subArr = [];
    for (let j = k; j < arr.length; j++) {
      console.log(k);
      if (Math.abs(pItem - arr[j]) <= 1) subArr.push(arr[j]);
    }
    subArrays.push(subArr);
  }
  return subArrays;
};
const numbers = [4, 6, 5, 3, 3, 1];
console.log(pickingNumbers(numbers));
