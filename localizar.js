export function localizar(string, caractere) {
  let indexes = [];
  let lastI = -1;
  while (lastI !== string.lastIndexOf(caractere)) {
    lastI = string.indexOf(caractere, lastI + 1);
    indexes.push(lastI);
  }
  return indexes;
}
