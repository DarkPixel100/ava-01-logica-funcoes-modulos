export function tifanofaufo(string) {
  let text = string;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === 's' || text[i] === 'c' || text[i] === 'd' || text[i] === 'j' || text[i] === 'b' || text[i] === 'v' || text[i] === 'r') {
      if (text[i] !== text[i + 1]) {
        text = text.slice(0, i) + "f" + text.slice(i + 1);
      } else {
        text = text.slice(0, i) + text.slice(i + 1);
        i--;
      }
    }
  }
  return text;
}
