// class declaration
class MyClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printInfo() {
    console.log(`Name :: ${this.name}, Age :: ${this.age}`);
  }
}

const clsObj = new MyClass("Name", 22);
clsObj.printInfo();

// class expression
const MyNewClass = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printInfo() {
    console.log(`Name :: ${this.name}, Age :: ${this.age}`);
  }
};

const newClsObj = new MyClass("Name", 22);
clsObj.printInfo();

//
// const clsObjErr = MyClass("Name", 22); // TypeError: Class constructor MyClass cannot be invoked without 'new'

// static methods
class ParentClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printInfo() {
    console.log(`Name :: ${this.name}, Age :: ${this.age}`);
  }

  static printName() {
    console.log(`Name :: ${this.name}`);
  }
}

let pClass = new ParentClass("prashant", 23);
ParentClass.printName();
// pClass.printName(); // TypeError: pClass.printName is not a function

// computed methods name
const dynamicMethod = "dynamicMethod";

class ComputedMethodClass {
  constructor() {}

  [dynamicMethod]() {
    console.log("This is dynamic method name");
  }
}

const dClass = new ComputedMethodClass();
dClass.dynamicMethod();