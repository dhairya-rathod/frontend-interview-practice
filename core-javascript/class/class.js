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

// inheritance
class Parent {
  constructor() {}

  printInfo(name) {
    console.log("Parent ~ printInfo ~ name:", name);
    console.log("TCL ~ Parent ~ printInfo ~ new.target:", new.target);
  }
}

class Child extends Parent {
  constructor() {
    super();
  }
}

const childInstance = new Child();
childInstance.printInfo("ABC");

// Inheritance example with Array class
class Country extends Array {
  // use rest operator to grab all the persons
  constructor(name, ...persons) {
    //pass all the students to the array
    super(...persons);
    this.country = name;
  }

  //Method to add new person
  add(person) {
    this.push(person);
  }
}


const myCountry = new Country('India',
  {name: "Prashant", age: 23},
  {name: "Yogesh", age: 24},
  {name: "Pranav", age: 23},
  {name: "Sachin", age: 23},
);

myCountry.add({name: "Aditya", age: 24});
console.log(myCountry[4]);

//loop the data
for(const persons of myCountry) {
  console.log(persons);
}