class Calculator {
  constructor() {
    this.value = 0;
  }
  add(num) {
    this.value += num;
    return this;
  }
  subtract(num) {
    this.value -= num;
    return this;
  }

  print() {
    console.log(this.value);
  }
}

class ScientificCalculator extends Calculator {
  constructor() {
    super();
  }
  square() {
    this.value **= 2;
    return this;
  }
}

const calc = new ScientificCalculator();
calc.add(5).subtract(2).square().print();
