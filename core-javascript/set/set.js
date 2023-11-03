// syntax
const set = new Set(); // :: Set(0) {}
const setString = new Set("STRING"); // :: Set(7) { 'S', 'T', 'R', 'I', 'N', 'G' }
const setArr = new Set([1, 2, 3, 4, 5]); // :: Set(5) { 1, 2, 3, 4, 5 }

// Set methods
const setMethods = new Set();
setMethods.add("item1");
setMethods.add("item3"); // :: Set(1) { 'item1', 'item3' }
setMethods.has("item1"); // :: true
setMethods.has("item2"); // :: false
setMethods.delete("item1"); // :: Set(1) { 'item3' }
setMethods.clear(); // :: Set(0) {}
console.log("TCL ~ setMethods:", setMethods);

// WeakSet example
let obj1 = { key1: "val1" };
let obj2 = { key1: "val1" };
let obj3 = { key1: "val1" };

const objs = new WeakSet();
objs.add(obj1);
objs.add(obj2);
objs.add(obj3);
// objs.add("XZY"); // TypeError: Invalid value used in weak set

objs.has(obj2); // :: true
objs.delete(obj2);
objs.has(obj2); // :: false
console.log("objs :: ", objs); // :: WeakSet {{…}, {…}}

// WeakSet garbage collection
obj1 = null;
// after few seconds obj1 will be removed from the WeakSet
console.log("objs :: ", objs); // :: WeakSet {{…}}