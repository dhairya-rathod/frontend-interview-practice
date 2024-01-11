function challenge01(a: number, b: number): number {
  // Create a TypeScript function that adds two numbers and returns the result.
  return a + b;
}
console.log(challenge01(1, 2));
// console.log(challenge01(3, "name")) //Argument of type 'string' is not assignable to parameter of type 'number'

// ------------------------------------------------------------------------
function challenge02(input: number): "even" | "odd" {
  // Write a TypeScript program to check if a given number is even or odd.
  return input % 2 === 0 ? "even" : "odd";
}
console.log(challenge02(2));

// ------------------------------------------------------------------------
class Challenge03 {
  // Define a TypeScript class for a basic calculator with add, subtract, multiply, and divide methods.
  constructor() {}

  add(a: number, b: number): number {
    return a + b;
  }
  subtract(a: number, b: number): number {
    return a - b;
  }
  multiply(a: number, b: number): number {
    return a * b;
  }
  divide(a: number, b: number): number {
    return a / b;
  }
}

const cl3 = new Challenge03();
console.log(cl3.add(1, 2));
console.log(cl3.subtract(1, 2));
console.log(cl3.multiply(1, 2));
console.log(cl3.divide(1, 2));

// ------------------------------------------------------------------------
const challenge04 = (input: [number, number, number]): number => {
  // Implement a TypeScript function to find the maximum of three numbers.
  return input.sort((a: number, b: number) => b - a)[0];
};
console.log(challenge04([1, 4, 3]));
// console.log(challenge04([1, 4, "abc"])); // Type 'abc' is not assignable to type 'number'

// ------------------------------------------------------------------------
function challenge05(input: string): string {
  // Create a TypeScript function that reverses a string.
  const strArr: string[] = input.split("");
  strArr.reverse();

  return strArr.join("");
}
console.log("reversed string", challenge05("john Doe"));

// ------------------------------------------------------------------------
function challenge06(input: number): number {
  // Write a TypeScript program to find and print the factorial of a given number.
  if (input <= 0) return 0;

  let answer: number = 1;
  while (input > 0) {
    answer = answer * input;
    input--;
  }

  return answer;
}

// ------------------------------------------------------------------------
function challenge07(input: string): boolean {
  // implement a TypeScript function that checks if a string is a palindrome.
  let pointer1: number = 0;
  let pointer2: number = input.length - 1;
  let isPalindrome: boolean = true;

  while (pointer1 <= pointer2) {
    if (input[pointer1] !== input[pointer2]) {
      isPalindrome = false;
      break;
    }
    pointer1++;
    pointer2--;
  }

  return isPalindrome;
}

// ------------------------------------------------------------------------
const challenge08 = <T>(input: T[]): T[] => {
  return [...new Set(input)];
};

challenge08<number>([1, 4, 6, 2, 3, 7, 1, 3, 5, 9, 6, 7, 9]);
challenge08<string>(["john", "kevin", "john", "emily", "sara", "arya", "emily"]);
