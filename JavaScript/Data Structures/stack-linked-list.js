class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let removed = this.first;
    this.first = this.first.next;
    
    if (this.first === this.last) {
      this.last = null;
    }

    this.size--;
    return removed.value;
  }
}

let stack = new Stack();
stack.push(23);
stack.push(230);
stack.push(2301);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
