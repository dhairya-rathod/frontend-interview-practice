class Stack {
  #items;
  constructor() {
    this.#items = [];
  }

  // insert a new item at the top of the stack
  push(item) {
    this.#items.push(item);
  }

  // remove and returns the top item of the stack
  pop() {
    return this.#items.pop();
  }

  // returns the top item of the stack
  peek() {
    return this.size() > 0 ? this.#items[this.size() - 1] : [];
  }

  clear() {
    this.#items = [];
  }

  #size() {
    return this.#items.length;
  }
}

const stack = new Stack();
stack.push("Z")
console.log(stack.peek());
