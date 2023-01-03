class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }
  isEmpty() {
    return this.count == 0;
  }
  size() {
    return this.count;
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peekFront() {
    return this.items[this.lowestCount];
  }
  peekBack() {
    return this.items[this.count];
  }
}

module.exports = Deque;

// const deque = new Deque();
// console.log(deque.isEmpty()); // outputs true
// deque.addBack("John");
// deque.addBack("Jack");
// console.log(deque.items); // John,Jack
// deque.addBack("Camila");
// console.log(deque.items); // John,Jack,Camila
// console.log(deque.size()); // outputs 3
// console.log(deque.isEmpty()); // outputs false
// deque.removeBack(); // remove Camilia
// console.log("hey ", deque.items); // John,Jack
// deque.removeBack(); // Jack decides to leave
// console.log("hello ",deque.items); // John
// deque.addFront("Jack"); // Jack comes back for information
// console.log(deque.items); // John,Jack
