function binarySearch(arr, number) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    const midIndex = Math.floor(leftIndex + rightIndex / 2);
    if (arr[midIndex] === number) return midIndex;
    if (arr[midIndex] < number) {
      rightIndex = midIndex - 1
    }
    else {
      leftIndex = midIndex + 1;
    }

  }
  return -1 ;
}

const arr = [5, 8, 10, 12, 13, 15, 17, 20];
console.log(binarySearch(arr, 12));
