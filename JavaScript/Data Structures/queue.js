class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
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

let queue = new Queue();
queue.enqueue(23);
queue.enqueue(231);
queue.enqueue(2310);
console.log(queue.dequeue());
