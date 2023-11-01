// pure functions
function pureFn(a, b) {
  return a + b;
}

console.log(pureFn(2, 3)); // 5
console.log(pureFn(2, 3)); // 5

// impure functions
let c = 0;
function imPureFn(a, b) {
  return a + b + c++;
}

console.log(imPureFn(2, 3)); // 5
console.log(imPureFn(2, 3)); // 6
