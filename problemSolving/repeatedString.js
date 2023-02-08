const repeatedString = (s, n) => {
  if (n > 1000000000000 || s.length > 100) return 0;
  const occuranceOfA = s.split("").filter((c) => c === "a").length;
  let stringLength = s.length;
  const repeatitions = n / stringLength;
  const totalOccuranceOfA = Math.ceil(repeatitions * occuranceOfA);
  return { occuranceOfA, stringLength, totalOccuranceOfA };
};

//const s = "a";
const s = "abcac";
const n = 8;
// const n = 10;
console.log(repeatedString(s, n));
