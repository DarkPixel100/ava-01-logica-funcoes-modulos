export function eliminar(string, remove) {
  let resp = string
  for (let i of remove) {
    for (let j = 0; j < resp.length; j++) {
      if (resp[j] === i) {
        resp = resp.slice(0, j) + resp.slice(j + 1);
        j--;
      }
    }
  }
  return resp;
}
