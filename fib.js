function caesarCipher(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const removeNonLetters = str
    .replace(/[^\w\s]/g, "")
    .replace(/\d/g, "")
    .toLowerCase();
  let result = "";
  for (let i = 0; i < removeNonLetters.length; i++) {
    const char = removeNonLetters[i];
    const index = alphabet.indexOf(char);
    const newIndex = (index + 13) % 26;
    result += alphabet[newIndex];
  }
  return result;
}

console.log(caesarCipher("a"));
