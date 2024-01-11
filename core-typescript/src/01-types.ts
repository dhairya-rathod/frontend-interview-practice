/*
  -> Typescript has several built in types which are...
  -> number, string, boolean, any, void, null and undefine, never, object, symbol, tuple, array, union
  -> We can also create custom type in typescript using interface ot type aliases
*/

// number type
const five: number = 5;

// string type
const greet: string = "Hello there";

// boolean type
const isFalse: boolean = false;

// any type
const doYouKnow: any = five + greet;

// null & undefined type
const iHaveNothing: null = null;
const uDefinedMe: undefined = undefined;

/*
  -> The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns
  -> void: Represents successful completion without a return value. Functions that perform side effects and don't explicitly return anything, like logging, have a void return type.
  -> never: Represents a situation where execution never reaches the end point. This can happen due to exceptions, infinite loops, or early exits through processes like process.exit().
*/
// void type (Represents successful completion without a return value)
const pleaseReturn = (): void => {
  console.log("I will not return anything");
};
// never type (Represents unsuccessful completion without a return value)
const error = (message: string): never => {
  throw new Error(message);
};

// unknown type
interface User {
  id: number; // only known property
  [key: string]: unknown;
}
const fetchUser = async (userId: number): Promise<User> => {
  // https://jsonplaceholder.typicode.com/users/1
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );
  const data = await response.json();
  return data as User;
};

const fetchAndCheck = async () => {
  const user = await fetchUser(1);

  // safely access user's property
  console.log("User name is :: ", user.name);
  console.log("User email is :: ", user.email);

  // with type guard check access property
  if (typeof user.address === "object") {
    // Assert user.address as a type that has a city property:
    const address = user.address as { city: string };
    console.log("User city is :: ", address);
  }
};

// interface
// intersection interface type
interface Car {
  brand: string;
  model: string;
}
interface ElectricCar {
  batteryRange: number;
}

type MyCar = Car & ElectricCar;

const myCar: MyCar = {
  brand: "Tesla",
  model: "Cyber Truck",
  batteryRange: 0,
};

// mapped interface type
interface Person {
  name: string;
  age: number;
}
type ReadOnlyPerson = Readonly<Person>; // make all property in <T> readonly
type OptionalPerson = Partial<Person>; // make all property in <T> optional

const personRO: ReadOnlyPerson = {
  name: "John",
  age: 12,
};
// personRO.age = 15; // Cannot assign to 'age' because it is a read-only property

const personOp: OptionalPerson = {
  name: "John",
};

// enum type
enum Themes {
  "light" = "light",
  "dark" = "dark",
}

const theme: string = Themes.dark;

// tuple type is an another kind of array in which exact property are defined
type MyDetails = [string, number, boolean];
const myData: MyDetails = ["John", 12, false];
