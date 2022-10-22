class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }

}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue("John");

queue.enqueue("Jack");

queue.enqueue("Camila");

queue.print();

console.log(queue.size());

console.log(queue.isEmpty());

queue.dequeue();

queue.dequeue();

queue.print();

