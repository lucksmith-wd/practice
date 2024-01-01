function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function () {
  console.log(`My name is ${this.name}.`);
};

const p1 = new Person("Bob", 30);

function Employee(name, age, empNum) {
  Person.call(this, name, age);
  this.empNum = empNum;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.work = function () {
  console.log(`${this.name} is working.`);
};

const e1 = new Employee("Robert", 35, 1234);

console.log(e1);

console.log(e1 instanceof Employee);
console.log(Employee.prototype.isPrototypeOf(e1));
console.log(e1.constructor === Employee);
