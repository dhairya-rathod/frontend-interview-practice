// As const
// as const is a type assertion in TypeScript that allows you to assert that an expression has a specific type, and that its value should be treated as a read-only value.
const colors = ["red", "blue", "green"] as const;

const mydata = {
  name: "john",
  age: 11,
} as const;

// As Type
// In TypeScript, the as keyword is used for type assertions, allowing you to explicitly inform the compiler about the type of a value when it cannot be inferred automatically. Type assertions are a way to override the default static type-checking behavior and tell the compiler that you know more about the type of a particular expression than it does.
const name_02: any = "John Doe";
const stringLength: number = (name_02 as string).length;
