// ***** currying *****
// let sum = function (a) {
//   return function (b) {
//     if (!b) return a;
//     return sum(a + b);
//   };
// };

// console.log(sum(1)(2)(3)(4)());

// ***** event bubbling / capturing *****
// document.getElementById("g-par").addEventListener("click", function (e) {
//   e.stopPropagation();
//   alert("G par");
// });

// document.getElementById("par").addEventListener("click", function (e) {
//   e.stopPropagation();
//   alert("par");
// });

// document.getElementById("child").addEventListener("click", function (e) {
//   e.stopPropagation();
//   alert("child");
// });

// ***** event delegation *****
// document.querySelector("#my-ul").addEventListener("click", function (e) {
//   console.log(e.target.id);
// });

// ***** debouncing *****

// let timer;
// let counter=0;

// function getData(event) {
//   console.log("TCL ~ getData ~ e:", event);
//   // console.log(`${++counter} ${name}`);
// }

// function useDebounce(fn, d) {
//   return function () {
//     let context = this,
//       args = arguments;
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, d);
//   };
// }

// let debounceFn = useDebounce(getData,500);

// ***** throttling *****
// let timer;
// let flag = true;

// function expensiveFn() {
//   console.log("Expensive");
// }

// function useThrottle(fn, d) {
//   return function () {
//     let context = this,
//       args = arguments;
//     if (flag) {
//       flag = false;
//       fn.apply(context, args);
//       timer = setTimeout(() => {
//         flag = true;
//         clearTimeout(timer);
//       }, d);
//     }
//   };
// }

// let throttlingFn = useThrottle(expensiveFn, 5000);

// ***** Smart multiplication *****
// function multiply(num1, num2) {
//   if (num2) return num1 * num2;
//   return function (num2) {
//     return num1 * num2;
//   };
// }
// console.log(multiply(4, 5)); // => 20
// console.log(multiply(3, 3)); // => 9

// const double = multiply(2);
// console.log(double(5));  // => 10
// console.log(double(11)); // => 22

// ***** Restore encapsulation *****
// function createStack() {
//   const items = [];
//   return {
//     push(item) {
//       items.push(item);
//     },
//     pop() {
//       return items.pop();
//     },
//     get() {
//       return items;
//     },
//   };
// }

// const stack = createStack();
// stack.push(10);
// stack.push(5);
// stack.pop(); // => 5
// console.log(stack.get());

// ***** redeclare variable in switch *****

// function switchFn() {
//   switch ("XYZ") {
//     case "XYZ": {
//       const name = "xxx";
//       break;
//     }
//     case "LMN": {
//       const name = "xxx";
//       break;
//     }
//     default:
//       break;
//   }
// }

// ***** promise.all & all settled  *****
// const pr1 = Promise.resolve("PR1 resolved");
// const pr2 = Promise.reject("PR2 rejected");
// const pr3 = Promise.resolve("PR3 resolved");

// Promise.all([pr1, pr2, pr3]).then(function(data){
//   console.log("all Then > ", data);
// }).catch(function(error){
//   console.log("all catch > ", error);
// });

// Promise.allSettled([pr1, pr2, pr3]).then(function(data){
//   console.log("allSettled Then > ", data);
// }).catch(function(error){
//   console.log("allSettled catch > ", error);
// });

// Promise.race([pr1, pr2, pr3]).then(function(data){
//   console.log("race Then > ", data);
// }).catch(function(error){
//   console.log("race catch > ", error);
// });

// Promise.any([pr2, pr1, pr3]).then(function(data){
//   console.log("any Then > ", data);
// }).catch(function(error){
//   console.log("any catch > ", error);
// });

// ***** Problem: flat an array  *****
// const arr = [1, 2, 3, [4, 5, [6, 7, 8, [, 9, 10, 11, 12, [13, 1, 15]]]]];

// function flatArr(arr = []) {
//   let newArr = [];
//   arr.forEach(function (value) {
//     if (Array.isArray(value)) {
//       let updArr = flatArr(value);
//       newArr = [...newArr, ...updArr];
//     } else {
//       newArr = [...newArr, value];
//     }
//   });
//   return newArr;
// }

// console.log(flatArr(arr));

// ***** Problem: boomerang  *****
// let boomCount = 0;
// const arr = [1, 2, 1, 4, 5, 6, 7, 6, 8, 11, 12, 12, 12];
// const length = arr.length;
// arr.forEach(function (value, index, arr) {
//   if (index + 3 <= length) {
//     const pointB = arr[index + 1];
//     const pointC = arr[index + 2];
//     if (value === pointC && value !== pointB) {
//       boomCount += 1;
//     }
//   }
// });
// console.log(boomCount);