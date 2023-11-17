// Array example
const arr = [];
const arr1 = new Array(); //create blank array
const arr2 = new Array(3); // create array with length of 3
const arr3 = new Array("a", "b", "c"); // ["a", "b", "c"]

// -------- Add element --------
// adding elements at the end of array
const addCharArr = ["a", "b", "c"];
addCharArr.push("d"); // ["a", "b", "c", "d"];
addCharArr[addCharArr.length] = "e"; //["a", "b", "c", "d", "e"];

// adding elements at the start of array
const addCharArr1 = ["a", "b", "c"];
addCharArr1.unshift("Z"); // ["Z", "a", "b", "c"];

// add element at specific location of array
const addCharArr2 = ["a", "b", "e"];
addCharArr2.splice(2, 0, "c", "d");
console.log("TCL ~ addCharArr2:", addCharArr2); // ["a", "b", "c", "d", "e"]

// -------- Remove element --------
// removing elements at the end of array
const removeCharArr = ["a", "b", "c", "d", "e"];
removeCharArr.pop(); // will return "e"
console.log("removeCharArr:", removeCharArr); // ["a", "b", "c", "d"];

removeCharArr.length = 2;
console.log("removeCharArr:", removeCharArr); // ["a", "b",];

// removing elements at the start of array
const removeCharArr1 = ["Z", "a", "b", "c"];
removeCharArr1.shift(); // ["a", "b", "c"];

// remove element at specific location of array
const removeCharArr2 = ["a", "b", "c", "d", "e"];

/**
 Using Array.slice(start, end) method.
 Removes all the element between the start and end index. It does not change the original array instead, returns a new copy with the element.
 */
removeCharArr2.slice(2, 4); // will return ["c", "d"]
console.log("TCL ~ removeCharArr2:", removeCharArr2); // ["a", "b", "c", "d", "e"];

/**
 Using Array.splice(start, count) method.
 Removes all the count of elements from the start index. It mutates the original array.
 */
removeCharArr2.splice(2, 2); // will return ["c", "d"]
console.log("TCL ~ removeCharArr2:", removeCharArr2); // ["a", "b", "e"]