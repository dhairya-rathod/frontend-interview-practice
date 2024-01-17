// **** Write a program to multiply two number without using multiply Sign in Javascript ****
// function multiply(a, b) {
//   let minVal = a < b ? a : b;
//   let maxVal = a === minVal ? b : a;
//   let ans = maxVal;

//   for (let index = 1; index < minVal; index++) {
//     ans = ans + maxVal;
//   }
//   return ans;
// }

// console.log(multiply(2, 3));

// **** Write a program return resolve if value is less than 5 using Promise ****
// async function isLessThanFive(val) {
//   return new Promise((resolve, reject) => {
//     if (val < 5) {
//       resolve(val);
//     } else {
//       reject("Value must be less than 5");
//     }
//   });
// }

// isLessThanFive(3)
//   .then((data) => console.log(data))
//   .catch((err) => console.log("err", err));

// isLessThanFive(6)
//   .then((data) => console.log(data))
//   .catch((err) => console.log("err", err));

// **** Write a program for following output using arrow function ****
/* console.log("output with arrow function", mul(2)(4)(6)); */
// const call = (a) => {
//   return (b) => {
//     return (c) => {
//       return a * b * c;
//     };
//   };
// };

// ****  Write the code which outputs prime numbers in the interval from 2 to n. ****
// function getPrimeNumber(input) {
//   let index = 2;
//   let primeNumbers = [];

//   while (index <= input) {
//     let index_ = 2;
//     let isPrime = true;
//     while (index_ < index) {
//       if (index % index_ === 0) {
//         isPrime = false;
//       }
//       index_++;
//     }
//     if (isPrime) primeNumbers.push(index);
//     index++;
//   }

//   return primeNumbers;
// }
// console.log(getPrimeNumber(100));

// ****  create a calculator ****
// function calculator() {
//   let answer = 0;
//   let a = 0;
//   let b = 0;

//   function read() {
//     a = Number(prompt("Enter number 1", 0));
//     b = Number(prompt("Enter number 2", 0));
//   }
//   function sum() {
//     answer = a + b;
//   }
//   function sub() {
//     answer = a - b;
//   }
//   function mul() {
//     answer = a * b;
//   }
//   function div() {
//     answer = a / b;
//   }
//   function getAnswer() {
//     return answer;
//   }

//   return {
//     read,
//     sum,
//     sub,
//     mul,
//     div,
//     getAnswer,
//   };
// }

// let calC = calculator();
// calC.read();
// calC.sum();
// calC.getAnswer();

// ****  Create a ladder object that allows to go up and down: ****

// function Ladder() {
//   this.currentStep = 0;

//   this.stepUp = function () {
//     this.currentStep++;
//   };

//   this.stepDown = function () {
//     this.currentStep--;
//   };
// }

// const ladder = new Ladder();
// ladder.stepUp();
// ladder.stepUp();
// ladder.stepUp();
// ladder.stepUp();
// ladder.stepDown();
// ladder.stepDown();
// console.log(ladder.currentStep);

// **** Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character '…', to make its length equal to maxlength. ****

// function truncate(str, maxlength) {
//   if (!maxlength) return str;
//   let str_ = [...str].splice(0, maxlength).join("");
//   if (str_.length < maxlength) {
//     console.log([].fill(".", 0, 3));
//   }
//   return str_;
// }

// console.log(truncate("Ya", 5));


// **** Write a javascript function to deepclone object/array ****
// const deepClone = (input) => {
//   if (input === null || typeof input !== 'object') return input;

//   if (Array.isArray(input)) return input.map(deepClone);

//   const clonedObj = {};
//   for (const key in input) {
//     if (input.hasOwnProperty(key)) {
//       clonedObj[key] = deepClone(input[key])
//     }
//   }

//   return clonedObj;
// }
// const originalObject = {
//   name: 'John',
//   age: 25,
//   address: {
//     city: 'New York',
//     zip: '10001'
//   },
//   hobbies: ['reading', 'traveling']
// };

// const clonedObject = deepClone(originalObject);
// clonedObject.age = 23
// console.log(originalObject);
// console.log(clonedObject);

// **** Write a javascript function to create a promise series ****
// Promise.seriese = function (input) {
//   return new Promise((resolve) => {
//     let output = [];

//     function promiseSrs(index) {
//       if (index === input.length) {
//         resolve(output);
//         return;
//       }
//       const currentPromise = input[index]
//       currentPromise.then(data => {
//         output.push(data);
//         promiseSrs(index + 1);
//       })

//     }

//     promiseSrs(0)
//   })
// }


// const promise1 = new Promise((resolve) => setTimeout(() => resolve('First'), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second'), 500));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve('Third'), 200));

// const promiseArray = [promise1, promise2, promise3];

// Promise.seriese(promiseArray)
//   .then((results) => {
//     console.log('Resolved in order:', results);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

// **** write a javascript function to deepfreeze object ****
// function deepFreeze(input) {
//   Object.freeze(input);
//   for (key in input) {
//     if (typeof inputp[key] === "object" && inputp[key] !== null) {
//       deepFreeze(inputp[key])
//     }
//   }

//   return input
// }