function square(n) {
  return n * n;
}

function memoizedSquare() {
  const cache = {};
  return (n) => ([n] in cache ? cache[n] : (cache[n] = square(n)));
  // if ([n] in cache) {
  //   console.log("returned from cache");
  //   return cache[n];
  // }
  // console.log("calculated fresh");
  // return (cache[n] = square(n));
}

const calcSquare = memoizedSquare();
console.log(calcSquare(10));
console.log(calcSquare(100));
console.log(calcSquare(1000));
console.log(calcSquare(100));
