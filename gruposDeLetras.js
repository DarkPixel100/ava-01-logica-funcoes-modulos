function ehConsoante(string) {
  if (string.charCodeAt(0) >= 98 && string.charCodeAt(0) <= 122 && string !== "e" && string !== "i" && string !== "o" && string !== "u")
    return true
  else
    return false
}

export function contaVogais(string) {
  let resp = 0;
  string = string.toLowerCase();
  for (let i of string) {
    if (["a", "e", "i", "o", "u"].includes(i)) resp++;
  }
  return resp;
}

export function contaConsoantes(string) {
  let resp = 0;
  string = string.toLowerCase();
  for (let i of string) {
    if (ehConsoante(i)) resp++;
  }
  return resp;
}
