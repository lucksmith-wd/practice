Array.prototype.flatten = function () {
  const arr = this;
  const result = [];

  function doFlatten(e) {
    if (!Array.isArray(e)) {
      result.push(e);
    } else {
      for (let el of e) {
        doFlatten(el);
      }
    }
  }

  for (let e of arr) {
    doFlatten(e);
  }
  return result;
};

const a = [1, 2, [3, [4, 5], 6], 7];
console.log(a.flatten());
