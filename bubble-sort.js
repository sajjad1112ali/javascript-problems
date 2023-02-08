function bubbleSort(arr) {
  let isSorted = true;
  let totalIterations = 0;
  for (let i = 0; i < arr.length; i++) {
    totalIterations++;
    isSorted = true;
    for (let j = 1; j < arr.length-1; j++) {
      totalIterations++;

      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
        isSorted = false;
      }
    }
    if (isSorted) break;
  }
  console.log(totalIterations);
  return arr;
}

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
const arr = [7, 3, 5, 2, 3, 1, 7, 8, 9];
console.log(bubbleSort(arr));
