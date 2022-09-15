function spinalCase(str) {
  const words = [];
  let word = "";
  for (c of str) {
    if (c === " " || c === "_" || c === "-") {
      words.push(word);
      word = "";
    } else if (c >= "A" && c <= "Z" && !word.length) {
      word = c.toLowerCase();
    } else if (c >= "A" && c <= "Z" && word.length) {
      words.push(word);
      word = c.toLowerCase();
    } else {
      word += c;
    }
  }
  if (word.length) {
    words.push(word);
  }
  return words.join("-");
}
console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
