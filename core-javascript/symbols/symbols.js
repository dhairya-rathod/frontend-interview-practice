const symbol1 = Symbol("example");
const symbol2 = Symbol("example");

const myObj = {
  [symbol1]: "symbol1",
  [symbol2]: "symbol2",
  publicKey: "Public Key",
};

console.log(symbol1 === symbol2); // false

// Using Symbol globally in javascript
// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert(id === idAgain); // true

// Checking current Symbol being used.
// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id