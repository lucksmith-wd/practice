function sortStr(str) {
  return str.split("").sort().join("").toLowerCase();
}

const isAnagram = (str1, str2) => sortStr(str1) === sortStr(str2);

console.log(isAnagram("racecar", "carrace"));
console.log(isAnagram("racecar", "carrade"));
