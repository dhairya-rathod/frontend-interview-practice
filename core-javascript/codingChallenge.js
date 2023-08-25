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
