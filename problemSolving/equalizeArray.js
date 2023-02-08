const equalizeArray = (arr) => {
  let maxArrLenght = 0;
  const arrLength = arr.length;
  for (const item of arr) {
    const currCount = arr.filter((n) => n === item).length;
    maxArrLenght = currCount > maxArrLenght ? currCount : maxArrLenght;
  }
  //
  // const subArrObj = {};
  // for (const item of arr) {
  //   const subArrObItem = subArrObj[item];
  //   if (subArrObItem) {
  //     subArrObItem.push(item);
  //   } else {
  //     subArrObj[item] = [item];
  //   }
  // }
  // const multiArray = [];
  // let maxArrLenght = 0;
  // for (const item in subArrObj) {
  //   const currentArrLenght = subArrObj[item].length;
  //   if (maxArrLenght < currentArrLenght) maxArrLenght = currentArrLenght;
  //   //  multiArray.push(subArrObj[item]);
  // }

  return arrLength - maxArrLenght;
};

const arrIn = [3, 3, 2, 1, 3];
// const arrIn = [1, 2, 2, 3];
console.log(equalizeArray(arrIn));
