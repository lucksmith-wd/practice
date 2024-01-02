/*
Give an integer (num), find the factorial of that integer.
If the integer is represented as num, the factorial of num is the product of all positive integers less than or equal to num.
Example
Factorial of 4 = 4 * 3 * 2 * 1
Factorial of 4 = 24
*/

// Non-recursive solution
// create function
// create variable fact = num
// loop from num -1 to num > 1
//  //times fact by num
//  //num--

function factorial(num) {
  if (num < 0) return -1;
  if (num === 0) return 1;
  let result = num--;
  while (num > 1) {
    result *= num--;
  }
  return result;
}

console.log(factorial(10000));

// Recursive solution
// if num === 0 or 1
// true: return 1
// false: return num * recursive call (num-1)

function factorialRecursive(num) {
  return num === 0 || num === 1 ? 1 : num * factorialRecursive(num - 1);
}
console.log(factorialRecursive(10000));
