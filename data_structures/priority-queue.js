const QueueElement = require('../models/queue-element')

class PriorityQueue {
  constructor() {
    this.items = new Array();
  }

  addToPriorityQueue(element, priority) {
    const queueElement = new QueueElement(element, priority);
    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement); 
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(queueElement);
      }
    }
  }

  printPriorityQueue() {
    if (this.items.length == 0) {
      console.log("No elements in the queue");
      return;
    }
    this.items.forEach(function (item) {
      console.log(
        `Priority Queue element : ${item.element} , Priority : ${item.priority}`
      );
    });
  }

  removeFromPriorityQueue() {
    return this.items.shift();
  }

  firstInPriorityQueue() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  lengthOfPriorityQueue() {
    return this.items.length;
  }
}

module.exports = PriorityQueue;

// let priorityQueue = new PriorityQueue();
// priorityQueue.addToPriorityQueue("John", 2);
// priorityQueue.addToPriorityQueue("Jack", 1);
// priorityQueue.addToPriorityQueue("Camila", 1);
// priorityQueue.printPriorityQueue();
