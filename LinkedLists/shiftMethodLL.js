class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.head == null) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return temp;
  }
}

let myLinkedList = new LinkedList(6);
myLinkedList.unshift(5);
myLinkedList.shift(); // when more than one node exists
myLinkedList.shift(); // when only one node exist
myLinkedList.shift(); // when there is no node exist
console.log("myLinkedList:", myLinkedList);
