class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const depthFirstValues = (root) => {
  if (root === null) return [];
  const stack = [root];

  const result = [];
  while (stack.length > 0) {
    //updating result
    const current = stack.pop();
    console.log(current.val);
    result.push(current.val);
    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }
  return result;
};

//get depthfirst values by recursion
const depthFirstValuesRecursion = (root) => {
  if (root === null) return [];
  const result = [];
  const traverse = (node) => {
    result.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };
  traverse(root);
  return result;
};

const depthFirstValuesRecursion2 = (root) => {
  if (root === null) return [];

  const leftValues = depthFirstValuesRecursion2(root.left);
  const rightValues = depthFirstValuesRecursion2(root.right);
  console.log([root.val, ...leftValues, ...rightValues]);
  return [root.val, ...leftValues, ...rightValues];
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(depthFirstValues(a));
console.log(depthFirstValuesRecursion(a));
console.log(depthFirstValuesRecursion2(a));

//commment an example binary tree illustration from the above
// a
// b   c
// d e   f

console.log(["d", ...[], ...[]]);

const arr = [3, 4, 4, 4, 4];

for (let item of arr) {
  console.log(item);
}
