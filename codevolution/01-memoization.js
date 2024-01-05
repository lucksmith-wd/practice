function square(n) {
  return n * n;
}

function memoize(cb) {
  const cache = {};
  return (n) => {
    if ([n] in cache) {
      console.log("Returned from cache");
      return cache[n];
    }
    const result = cb(n);
    console.log("Newly calculated");
    cache[n] = result;
    return result;
  };
}

const calcSquare = memoize(square);
console.log(calcSquare(10));
console.log(calcSquare(100));
console.log(calcSquare(1000));
console.log(calcSquare(100)); // Returned from cache 10000
