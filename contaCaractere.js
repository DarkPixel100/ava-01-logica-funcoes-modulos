export function contaCaractere(string, caractere) {
  let resp = 0;
  for (let i of string) {
    if (i === caractere) {
      resp++;
    }
  }
  return resp;
}
