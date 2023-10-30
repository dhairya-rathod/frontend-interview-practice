const arrowFnExample = () => {
  console.log("Value of this :: ", this); // global
  console.log("Bind example :: ", this.bindVal); // undefined
  console.log("Value of arguments :: ", arguments); // ReferenceError: arguments is not defined
};
arrowFnExample();
const bindEx = arrowFnExample.bind({ bindVal: "Bind Value" });
bindEx();

// Cannot use it as a constructor
const ConstructorFn = () => {};
const constructorFn = new ConstructorFn(); // TypeError: ConstructorFn is not a constructor

// Regular function with a prototype property
function RegularFunction() {}
RegularFunction.prototype.sayHello = function () {
  console.log("Hello from RegularFunction");
};
const regularInstance = new RegularFunction();
regularInstance.sayHello(); // "Hello from RegularFunction"

// Arrow function with no prototype property
const ArrowFunction = () => {};
const arrowInstance = new ArrowFunction(); // This will throw an error
// Attempting to add a prototype method to an arrow function will not work
ArrowFunction.prototype.sayHello = function () {
  console.log("Hello from ArrowFunction"); // This will not work
};

// Implicitly return
const implicitlyReturn_1 = () => "Implicitly return";
const implicitlyReturn_2 = () => ({ key_1: "value_1" });
const implicitlyReturn_3 = (key) => `ABC XYZ ${key}`;

// Example of "this"
// Normal function
var increment = {
  default: 1,
  start: function () {
    setInterval(function () {
      console.log(this.default++);
    }, 1000);
  },
};
//NaN; NaN; NaN;

// Arrow Function
var increment = {
  default: 1,
  start: function(){
     setInterval(() => {
       console.log(this.default++);
     }, 1000);
   }
}
//1; 2; 3;


// Avoid arrow function
const button = document.getElementById('btnXYZ');
button.addEventListener("click", () => {
  // error: *this* refers to the `Window` Object
  this.classList.toggle("on");
});