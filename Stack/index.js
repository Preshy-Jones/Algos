class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  //add element to top of stack
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count += 1;
    return this.count - 1;
  }

  //return and remove top element in stack
  //return undefined if stack is empty
  pop() {
    if (this.count == 0) return undefined;
    let deleteItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }

  //check top element in stack
  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  isEmpty() {
    console.log(this.count == 0 ? "Stack is empty" : "Stack is NOT empty");
    return this.count == 0;
  }

  print() {
    let str = "";
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }

  size() {
    console.log(`${this.count} elements in stack`);
    return this.count;
  }
  clear() {
    this.items = [];
    this.count = 0;
    console.log("Stack cleared..");
    return this.items;
  }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);

// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();

console.log(stack.print());

//console.log(stack.pop());
