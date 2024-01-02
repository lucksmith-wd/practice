/* 
You are given an array of two numbers [a,b]. Find the sum of those two numbers plus the sum of all the numbers between them.
(Note: The lower number may not always be the first element in the array)
*/

// create fn, destructure arr.
// create variable total = 0
// loop from Min(num1, num2) till Max(num1, num2)
//  // add each number to total
// return sum

function sum([n1, n2]) {
  let total = 0;
  for (let i = Math.min(n1, n2); i <= Math.max(n1, n2); i++) {
    total += i;
  }
  return total;
}

console.log(sum([1, 4]));
console.log(sum([4, 1]));
