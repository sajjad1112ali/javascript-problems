const getStepsCount = (catPos, mousePos) => {
  const stepsCount = catPos - mousePos;
  return stepsCount;
};

const isValid = (x, y, z) => {
  if (x < 1 || x > 100 || y < 1 || y > 100 || z < 1 || z > 100) return false;
  return true;
};

const catAndMouse = (x, y, z) => {
  if (!isValid(x, y, z)) return "";
  const stepsForCatA = Math.abs(getStepsCount(x, z));
  const stepsForCatB = Math.abs(getStepsCount(y, z));
  if (stepsForCatA < stepsForCatB) return "Cat A";
  else if (stepsForCatA > stepsForCatB) return "Cat B";
  else return "Mouse C";
};

const x = 1,
  y = 2,
  z = 3;

console.log(catAndMouse(x, y, z));
