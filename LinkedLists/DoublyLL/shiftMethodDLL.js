class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length == 0) return undefined;
    let temp = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(5);
myDoublyLinkedList.push(6);
myDoublyLinkedList.shift(); // when more than one nodes are exist
myDoublyLinkedList.shift(); // when only one node is exist
myDoublyLinkedList.shift(); // when there are no nodes are exist
console.log("myDoublyLinkedList:", myDoublyLinkedList);
