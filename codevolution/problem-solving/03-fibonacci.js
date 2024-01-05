function printFibo(n) {
  if (n < 1) return console.log("");
  if (n === 1) return console.log("0");
  const arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  console.log(arr.join(" "));
}

printFibo(2);
printFibo(10);

// recursive solution
function printFibonacci(n) {
  const arr = [];
  function getFibo(n) {
    if (n < 2) return n;
    return getFibo(n - 2) + getFibo(n - 1);
  }
  for (let i = 0; i < n; i++) {
    arr.push(getFibo(i));
  }
  console.log(arr.join(" "));
}

printFibonacci(2);
printFibonacci(10);
