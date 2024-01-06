function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

function countPalindromicSubstrings(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      if (isPalindrome(str.substring(i, j))) count++;
    }
  }
  return count;
}

console.log(countPalindromicSubstrings("aaa"));
console.log(countPalindromicSubstrings("abcd"));
