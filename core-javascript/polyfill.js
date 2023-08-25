// **** polyfill for reduce ****
// Array.prototype.myReduce = function (fn, acc) {
//   let context = this;
//   let accumulator = acc ?? context[0];

//   for (let index = 0; index < context.length; index++) {
//     accumulator = fn(accumulator, context[index], index, context);
//   }
//   return accumulator;
// };

// const xxx = [1, 2, 3, 4, 5].reduce(function (acc, curr, index, arr) {
//   return acc + curr;
// }, 0);
// const xxx = [1, 2, 3, 4, 5].myReduce(function (acc, curr, index, arr) {
//   return acc + curr;
// }, 0);

// **** polyfill for filter ****
// Array.prototype.myFilter = function (fn) {
//   let context = this;
//   let returnArr = [];

//   for (let index = 0; index < context.length; index++) {
//     let res = fn(context[index], index, context);
//     if (res) {
//       returnArr = [...returnArr, context[index]];
//     }
//   }
//   return returnArr;
// };
// const xxx = [1, 2, 3, 4, 5].myFilter((data) => data >= 3);

// console.log(xxx);

// **** polyfill for map ****
// Array.prototype.myMap = function (fn) {
//   let context = this;
//   let returnArr = [];

//   for (let index = 0; index < context.length; index++) {
//     const res = fn(context[index], index, context);
//     returnArr = [...returnArr, res];
//   }

//   return returnArr;
// };
// const xxx = [1, 2, 3, 4, 5].myMap((data) => data * 3);
// console.log(xxx);