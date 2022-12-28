const {defaultEquals} = require("../util/util");
const Node = require("../models/node");

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head == null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

module.exports = LinkedList;

// a - b - c - d
// d - c - b - a

function reverseLinkedList(list) {
  temp_curr = null
  previous = null
  while (true) {
    //b | c
    temp_curr = list.head.next;
    // null
    list.head.next = previous;

    previous = list.head;

    if (temp_curr === null)
      break
    // b
    list.head = temp_curr;

  }
  return list

} 

const list = new LinkedList();
list.push(115);
list.push(10);
list.push(1);
list.push(20);
list.push(125);
list.push(1110);
console.log(list.toString());
const rlist = reverseLinkedList(list)
console.log(rlist.toString());
console.log(list.toString());
// list.removeAt(0);
// console.log(list.toString());
// console.log(list.getElementAt(1));
// list.insert(31, 0);
// console.log(list.toString());
// console.log(list.indexOf(31));
// console.log(list.remove(10));
// console.log(list.toString());
