class Queue {
  constructor() {
    this.items = new Array();
  }

  addToQueue(element) {
    this.items.push(element);
  }

  removeFromQueue() {
    return this.items.shift();
  }

  firstInQueue() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  lengthOfQueue() {
    return this.items.length;
  }

  printQueue() {
    if (this.items.length == 0) {
      console.log("No elements in the queue");
      return;
    }
    console.log(`Elements of queue : ${this.items}`);
  }
}

module.exports = Queue;

// let queue = new Queue();
// queue.printQueue();
// console.log(queue.isEmpty()); //outputs true
// queue.addToQueue("John");
// queue.addToQueue("Jack");
// queue.printQueue()

// console.log(queue.lengthOfQueue()); //outputs 3
// console.log(queue.isEmpty()); //outputs false
// queue.removeFromQueue();
// queue.removeFromQueue();
// queue.printQueue();
