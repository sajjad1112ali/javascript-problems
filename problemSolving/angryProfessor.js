
function angryProfessor(k, a) {
  const studentsOnTime = a.filter((s) => s <=0).length
  const willClassCancelled =  studentsOnTime >= k ? "NO" : "YES";
  return willClassCancelled;
}
const a = [3, 10, 2, 9],
  k = 1;
console.log(angryProfessor(k, a));
