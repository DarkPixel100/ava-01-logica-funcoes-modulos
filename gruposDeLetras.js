export function contaVogais(string) {
  let resp = 0;
  string = string.toLowerCase();
  for (let i of string) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      resp++;
    }
  }
  return resp;
}

export function contaConsoantes(string) {
  let resp = 0;
  string = string.toLowerCase();
  for (let i of string) {
    if (i.charCodeAt(0) >= 98 && i.charCodeAt(0) <= 122 && i !== "e" && i !== "i" && i !== "o" && i !== "u") {
      resp++;
    }
  }
  return resp;
}
