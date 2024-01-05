function isPrime(n) {
  if (n % 2 === 0) return n === 2;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return n !== 1;
}

function printPrime(min, max) {
  const primeArr = [];
  for (let i = min; i <= max; i++) {
    if (isPrime(i)) primeArr.push(i);
  }
  console.log(primeArr.join(" "));
}

printPrime(0, 200);

function printPrimeMemo(min, max) {
  const primeArr = [];
  function isPrime(n) {
    if (n === 0) return false;
    for (let prime of primeArr) {
      if (prime <= Math.sqrt(n) && n % prime === 0) return false;
    }
    return n !== 1;
  }
  for (let i = min; i <= max; i++) {
    if (isPrime(i)) primeArr.push(i);
  }
  console.log(primeArr.join(" "));
}

printPrimeMemo(0, 200);
