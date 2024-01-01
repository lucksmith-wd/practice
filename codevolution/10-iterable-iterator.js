// Basic implementation
const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) return { value: "Hello", done: false };
        if (step === 2) return { value: "World", done: false };
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

// for (const element of obj) {
//   console.log(element); // "Hello" "Word"
// }

// Exercise
// Make an empty object, range, iterable. It's behaviour when using the for-of loop is to print numbers from 1 to 50.

const range = {
  [Symbol.iterator]: function (start = 1, end = 50, interval = 1) {
    let step = start;
    return {
      next: function () {
        const ret = {
          value: step <= end && step >= start ? step : undefined,
          done: step > end,
        };
        step += interval;
        return ret;
      },
    };
  },
};

// for (const element of range) {
//   console.log(element);
// }

const iterator = range[Symbol.iterator](10, 20, 2);

for (let obj = iterator.next(); !obj.done; obj = iterator.next()) {
  console.log(obj.value);
}

for (let obj = iterator.next(); !obj.done; obj = iterator.next()) {
  console.log(obj.value);
}
