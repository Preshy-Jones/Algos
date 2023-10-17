class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const breadthFirstValues = (root) => {
  if (root === null) return [];

  const queue = [root];
  const results = [];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current.val);
    results.push(current.val);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }

  return results;
};

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(breadthFirstValues(a));
