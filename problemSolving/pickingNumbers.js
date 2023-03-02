const isValid = (arr) => {
  if (arr.length <= 2 || arr.length >= 100) return false;
  return true;
};

const pickingNumbers_ = (arr) => {
  if (!isValid(arr)) return -1;
  const arrLengt = arr.length - 1;
  const subArrays = [];
  for (let k = 0; k < arrLengt; k++) {
    let pItem = arr[k];
    const subArr = [];
    for (let j = k; j < arr.length; j++) {
      if (Math.abs(pItem - arr[j]) <= 1) { 
        subArr.push(arr[j]);
        pItem = arr[j];
      }
      else {
        pItem =  arr[k];
      }
    }
    subArrays.push(subArr);
  }
  for (let k = 0; k < subArrays.length; k++) {
    for (let i = 0; i < subArrays[k].length; i++) {

    }
  }

  return subArrays;
};


const pickingNumbers = (arr) => {
  if (!isValid(arr)) return -1;
  const arrLengt = arr.length - 1;
  const subArrays = [];
  for (let k = 0; k < arrLengt; k++) {
    let pItem = arr[k];
    const subArr = [];
    for (let j = k; j < arr.length; j++) {
      console.log(k);
      if (Math.abs(pItem - arr[j]) <= 1) { 
        subArr.push(arr[j]);
       // pItem = arr[j];
      }
    }
    subArrays.push(subArr);
  }

  for (let k = 0; k < subArrays.length; k++) {
    for (let i = 0; i < subArrays[k].length; i++) {

    }
  }
  
  return subArrays;
};

const numbers = [4, 6, 5, 3, 3, 1];
console.log(pickingNumbers(numbers));