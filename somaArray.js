export function somaArray(array) {
  let total = 0;
  for (let i of array) {
    total += Number(i);
  }
  return total;
}
