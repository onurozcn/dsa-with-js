class Stack {
    constructor() {
        this.items = new Array()
    }

    addToStack(element) {
        this.items.push(element)
    }

    removeFromStack() {
        return this.items.pop()
    }

    printStack() {
        if (this.items.length == 0) {
            console.log("Stack is empty");
            return
        }
        console.log(`Elements of this stack : ${this.items.toString()}`)
    }

    lengthOfStack() {
        return this.items.length
    }

    isEmpty() {
        return this.items.length == 0
    }

    clearStack() {
        this.items = []
    }

    peek() {
        return this.items[this.items.length - 1]
    }
}

module.exports = Stack

// const newStack = new Stack();
// console.log(newStack.isEmpty());
// newStack.addToStack(23)
// newStack.printStack()
// newStack.addToStack(2233);
// newStack.printStack();
// newStack.addToStack(1213);
// newStack.printStack();
// newStack.addToStack(4523);
// newStack.printStack();
// console.log(newStack.removeFromStack());
// console.log(newStack.peek());
// console.log(newStack.isEmpty());
// console.log(newStack.lengthOfStack());
// newStack.clearStack();
// newStack.printStack();


