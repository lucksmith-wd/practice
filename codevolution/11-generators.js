function* generator() {
  yield "Hello";
  yield "world";
}

const obj = generator();
// for (const o of obj) {
//   console.log(o);
// }

// Exercise
// Create an iterable which when iterated over with a for..of loop will print numbers from 1 to 50.
function* gnrtr(start = 1, end = 20, interval = 1) {
  for (let i = start; i <= end; i += interval) {
    yield i;
  }
}

for (const count of gnrtr(8, 18, 3)) {
  console.log(count);
}
