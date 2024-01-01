class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`My name is ${this.name}.`);
  }
}

class Employee extends Person {
  constructor(name, age, empNum) {
    super(name, age);
    this.empNum = empNum;
  }

  work() {
    console.log(`${this.name} is working. Haaaard!`);
  }
}

const p1 = new Person("Bob", 40);
console.log(p1);
p1.sayName();

const e1 = new Employee("Robert", 30, 1234);
console.log(e1);
e1.work();
e1.sayName();
