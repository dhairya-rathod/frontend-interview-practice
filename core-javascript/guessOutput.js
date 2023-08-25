// **** guess 1 ****
var num = 4;
function outer() {
  var num = 2;
  function inner() {
    num++;
    var num = 3;
    console.log("num", num);
  }
  inner();
}
outer();
function sayHi() {
  return (() => 0)();
}

// **** guess 2 ****
for (let i = 0; i < 5; i++) {
setTimeout(function () {
console.log(i);
}, i * 1000);
}

// **** guess 3 ****
const firstname = fun();
Let name = ‘vivek’
Function fun(){
Return `my is ${name} malviya`
}
console.log(firstname);