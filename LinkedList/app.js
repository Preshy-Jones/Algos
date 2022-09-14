const LinkedList = require("./index");

//const ll = LinkedList.fromValues(10, 20, 30, 40, 50);
const ll = LinkedList.fromValues(1, 2, 3, 4);
ll.insertAt(5, 2);
ll.printListData()
console.log(ll.size);