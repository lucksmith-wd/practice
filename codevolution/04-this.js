// function Vehicle(type, color) {
//   if (this instanceof Vehicle) throw new Error("Invalid constructor invocation");
//   this.type = type;
//   this.color = color;
//   return this;
// }

// const vehicle1 = new Vehicle("Toyota", "green");
// console.log(vehicle1);

// const vehicle2 = Vehicle("Mazda", "red");
// console.log(vehicle2);

// function Pet(type, color) {
//   this.type = type;
//   this.color = color;

//   this.logInfo = () => {
//     console.log(`I'm a(n) ${this.type} and my color is ${this.color}.`);
//   };
// }
// const myDog = new Pet("Labrador", "black");
// setTimeout(myDog.logInfo, 1000); // I'm a(n) undefined and my color is undefined.

// const person = {
//   name: "Bob",
// };

// function sayMyName(job) {
//   console.log(`My name is ${this.name}`);
//   console.log(`I'm a ${job}.`);
// }

// Function.prototype.myBind = function (...args) {
//   const targetFn = this;
//   return function (...args2) {
//     targetFn.call(...[...args, ...args2]);
//   };
// };

// const sayMyNameBob = sayMyName.myBind(person);
// sayMyNameBob("student");

const person = {
  name: "Vishvas",
  hobbies: ["Chess", "Football"],
  printBio() {
    const printHobbies = () => {
      return `${this.hobbies[0]} ${this.hobbies[1]}`;
    };
    console.log(`My name is ${this.name}`);
    console.log(`I like ${printHobbies()}`);
  },
};

person.printBio();
