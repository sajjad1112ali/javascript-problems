const isValid = (keyboards, drives, b) => {
  if (
    keyboards.length <= 0 ||
    keyboards.length > 1000 ||
    drives.length <= 0 ||
    drives.length > 1000 ||
    b <= 0 ||
    b > 1000000
  )
    return false;
  if (Math.min(...keyboards) + Math.min(...drives) > b) return false;
  return true;
};

const getMoneySpent = (keyboards, drives, b) => {
  if (!isValid(keyboards, drives, b)) return -1;
  const filteredKeyBoards = keyboards.filter((item) => item < b);
  const filteredDrives = drives.filter((item) => item < b);
  if (filteredKeyBoards.length === 0 || filteredDrives.length === 0) return -1;
  let largerArry = [];
  let smallerArry = [];

  if (filteredKeyBoards.length > filteredDrives.length) {
    largerArry = filteredKeyBoards;
    smallerArry = filteredDrives;
  } else {
    largerArry = filteredDrives;
    smallerArry = filteredKeyBoards;
  }
  const pairArry = [];
  largerArry.map((item) => {
    smallerArry.map((sitem) => {
      if (item + sitem <= b) pairArry.push(item + sitem);
    });
  });
  console.log(largerArry);
  console.log(smallerArry);
  return Math.max(...pairArry);
};

const keyboards = [3, 1],
  drives = [5, 2, 8],
  b = 10;

// const keyboards = [5],
//   drives = [4],
//   b = 5;
// const keyboards = [40, 50, 60],
//   drives = [5, 8, 12],
//   b = 60;

console.log(getMoneySpent(keyboards, drives, b));
