// 1. Normal Function
function normalFn() {
  console.log("This is a normal function");
}
normalFn();

// 2. As a methods
const xyzObj = {
  key_1: "value_1",
  key_2: "value_2",
  key_fn: function () {
    console.log("This is a method of xyzObj");
  },
};

xyzObj.key_fn();

// 3. As a function expression
const fnExpression = function () {
  console.log("This is a function expression");
};
fnExpression();

// 4. Using call/bind and apply
function cba(type) {
  console.log(`This is an example of ${type} :: `, this.key_1);
}
const bind_1 = cba.bind({ key_1: "value_1" }, "bind");
bind_1();
cba.call({ key_1: "value_1" }, "call");
cba.apply({ key_1: "value_1" }, ["apply"]);

// 5. As a constructor
const number = new Number("10");
console.log("This is an example of a constructor", number);

// 6. IIFE (Immediately Invoked Function Expression)
(() => {
  console.log("This is a IIFE (Immediately Invoked Function Expression)");
})();

// Value of "this" when invoked as a normal function
function normalThisFn() {
  // this = global/window object
  console.log("Value of 'this' in  normal function :: ", this);
}
normalThisFn();

// Value of "this" when invoked as a normal function with "use strict"
function normalThisFnWithStrict() {
  "use strict";
  // this = undefined
  console.log("Value of 'this' in normal function with strict mode :: ", this);
  // It also affects all the inner functions that are defined in the function which is declared in strict mode.
  function inner() {
    // this = undefined
    console.log("Value of 'this' in inner function with strict mode :: ", this);
  }
  inner();
}
normalThisFnWithStrict();

// Value of "this" when a function is declared inside an object
const thisInsideObj = {
  key_1: "value_1",
  key_fn: function () {
    // this = thisInsideObj
    console.log("Value of 'this' inside function :: ", this);
    function inner() {
      console.log("Value of 'this' inside inner function :: ", this);
    }
    inner();
  },
};
thisInsideObj.key_fn();
thisInsideObj.key_1 = "value_2";
thisInsideObj.key_fn();

// Extract the method and save it in a variable
const varKeyFn = thisInsideObj.key_fn;
varKeyFn(); // this = global/undefined

// "this" in arrow function
const thisInArrowFn = () => {
  // this = global/undefined
  console.log("This in arrow function :: ", this);
};
thisInArrowFn();