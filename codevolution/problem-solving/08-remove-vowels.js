function removeVowels(str) {
  return str.replaceAll(/[aeiou]/gi, "");
}

console.log(removeVowels("HEllo world"));
