function add(accumulator, a) {
  return accumulator + a;
}
function bonAppetit(bill, k, b) {
  const removedBill = bill.splice(k, 1);
  const share = bill.reduce(add, 0)/2;
  return  share === b ? 'Bon Appetit' : (b - share);
}
const bill = [3, 10, 2, 9],
  k = 1,
  b = 7;
console.log(bonAppetit(bill, k, b));
