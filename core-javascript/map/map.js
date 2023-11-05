// syntax
const map = new Map();
map.set(5, "Int Five");
map.set("5", "Str Five");
console.log("size of the map :: ", map.size); // :: 2
console.log("get Int Five :: ", map.get(5)); // :: "Int Five"
console.log("get Str Five :: ", map.get("5")); // :: "Str Five"

// map with initial values
const map2 = new Map([
  [5, "Int Five"],
  ["5", "Str Five"],
]);
console.log("size of the map :: ", map2.size); // :: 2
console.log("get Int Five :: ", map2.get(5));
console.log("get Str Five :: ", map2.get("5"));

// store objects as keys
const map3 = new Map();
const key1 = {};
const key2 = { name: "XXX" };
map3.set(key1, key1);
map3.set(key2, key1);
map3.set(key2, key2); // store "unique values" and overwrite with latest value
console.log("size of the map :: ", map3.size); // :: 2
console.log("get key1 :: ", map3.get(key1)); // {}
console.log("get key2 :: ", map3.get(key2)); // { name:"XXX" }
console.log("get Str Five :: ", map3.get("5")); // undefined

// Map methods
const map4 = new Map();
map4.set(1, "ABC");
map4.set(2, "XYZ");
map4.set(3, "LMN");
map4.set("3", "OPQ");
map4.set("string", "This is string");
map4.set(undefined, 20);
const obj = { a: 0, b: 1 };
map4.set(obj, 25);
const fn = function () {};
map4.set(fn, 27);
map4.set(null, 23);

console.log(map4.has(null)); // :: true
console.log(map4.get(null)); // :: 23
console.log(map4.delete(null));
// console.log(map4.clear());

// Map chain
map.set("1", "str1").set(1, "num1").set(true, "bool1");
