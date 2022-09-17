class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(element) {
    this.storage[this.size] = element;
    this.size++;
  }

  pop() {
    if (this.size === 0) return undefined;
    this.size--;
    let deleteItem = this.storage[this.size];
    delete this.storage[this.size];
    console.log(deleteItem);
    return deleteItem;
  }

  peek() {
    return this.storage[this.size - 1];
  }
}


const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

stack.pop();
stack.pop();