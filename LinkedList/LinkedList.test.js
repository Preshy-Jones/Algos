const LinkedList = require("./index");

describe("insertAtHead", () => {
  test("It adds the element to the beginning of the list", () => {
    const ll = new LinkedList();
    ll.insertFirst(1);
    const oldHead = ll.head;
    ll.insertFirst(2);
    expect(ll.head.data).toEqual(2);
    expect(ll.head.next).toEqual(oldHead);
    expect(ll.size).toEqual(2);
  });
});

describe("getByIndex", () => {
  describe("with index less than 0", () => {
    test("It returns null", () => {
      const ll = LinkedList.fromValues(1, 2, 3);
      expect(ll.getAt(-1)).toBeNull();
    });
  });
  describe("with index greater than size", () => {
    test("It returns null", () => {
      const ll = LinkedList.fromValues(1, 2, 3);
      expect(ll.getAt(5)).toBeNull();
    });
  });
  describe("with index 0", () => {
    test("It returns the head", () => {
      const ll = LinkedList.fromValues(1344, 244, 322);
      expect(ll.getAt(0).data).toBe(1344);
    });
  });
  describe("with index in the middle", () => {
    test("It returns the head", () => {
      const ll = LinkedList.fromValues(1344, 244, 322, 443, 43);
      expect(ll.getAt(2).data).toBe(322);
    });
  });
});

describe("insertAtIndex", () => {
  describe("with index less than 0", () => {
    test("It inserts at head", () => {
      const ll = LinkedList.fromValues(1, 2, 3, 4);
      ll.insertAt(5, -4);
      expect(ll.head.data).toBe(5);
      expect(ll.head.next.data).toBe(1);
      expect(ll.size).toBe(5);
    });
  });
  describe("with index greater than size", () => {
    test("It inserts last", () => {
      const ll = LinkedList.fromValues(1, 2, 3);
      ll.insertAt(6, 10);
      ll.printListData();
      expect(ll.getAt(3).data).toBe(6);
      expect(ll.size).toBe(4);
    });
  });
  describe("with index 0", () => {
    test("It inserts at head", () => {
      const ll = LinkedList.fromValues(1, 2, 3, 4);
      ll.insertAt(5, -4);
      expect(ll.head.data).toBe(5);
      expect(ll.head.next.data).toBe(1);
      expect(ll.size).toBe(5);
    });
  });
  describe("with index in the middle", () => {
    test("It inserts at given index", () => {
      const ll = LinkedList.fromValues(1, 2, 3, 4);
      ll.insertAt(5, 2);
//      console.log(ll.printListData());
      const node = ll.getAt(2);
      expect(node.data).toBe(5);
      expect(node.next.data).toBe(3);
      expect(ll.size).toBe(5);
    });
  });
});
