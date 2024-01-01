// function log(date, importance, message) {
//   console.log(
//     `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] [${importance}] ${message}`
//   );
// }

// function curry(fn) {
//   return function (date) {
//     return function (importance) {
//       return function (message) {
//         return fn(date, importance, message);
//       };
//     };
//   };
// }

// const curriedLogNow = curry(log)(new Date());
// curriedLogNow("High")("That's currying, baby!");

// const buildSandwich = (ingredient1) => {
//   return (ingredient2) => {
//     return (ingredient3) => {
//       return `${ingredient1}, ${ingredient2} ${ingredient3}`;
//     };
//   };
// };
// const mySandwich = buildSandwich("bacon")("lettuce")("tomato");
// // console.log(mySandwich);

// const buildSammy = (ingred1) => (ingred2) => (ingred3) =>
//   `${ingred1}, ${ingred2}, ${ingred3}`;
// const mySammy = buildSammy("turkey")("cheese")("bread");

// // console.log(mySammy);

// const multiply = (x, y) => x * y;

// const curriedMultiply = (x) => (y) => x * y;
// const double = curriedMultiply(2);
// console.log(double(3));

// const updateElementText = id => content => document.querySelector(`#${id}`).textContent = content;
// const updateHeader = updateElementText("header");
// updateHeader("Blah blah")

// let multiply = function (x, y) {
//   console.log(x * y);
// };

// let double = multiply.bind(this, 2);
// console.log(double);
// console.log(double(5));

// Implementing curry function

// Function to be curried
function concatStuff(firstname, lastname, job) {
  return `${firstname} ${lastname} is a(n) ${job}`;
}

// Implementation
function curry(f) {
  return function curried(...args) {
    return f.length > args.length ? curried.bind(null, ...args) : f(...args);
  };
}

const curriedConcat = curry(concatStuff);
console.log(curriedConcat("Bob")("vanMason")("Builder"));
