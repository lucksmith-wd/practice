let name = {
  firstname: "Balazs",
  lastName: "Braun",
};

let name2 = {
  firstname: "Koacs",
  lastName: "Geza",
};

let printName = function (hometown, county, country) {
  console.log(
    `${this.firstname} ${this.lastName}, ${hometown}, ${county}, ${country}`
  );
};

// Polyfill for .bind()
Function.prototype.myBind = function (...args) {
  const targetFn = this;
  return function (...args2) {
    targetFn.call(...[args, args2].flat());
  };
};

let printMyName = printName.bind(name, "Iklad");
printMyName("Pest", "Hungary");

let printMyName2 = printName.myBind(name2, "Aszod");
printMyName2("Nograd", "Hungary");
