/**
 * Priority Queue
 *   - A data structure where each element has a priority.
 *   - Elements with higher priorities are served before elements with lower priorities.
 *   - Elements are taken out of the queue one at a time.
 * 
 * NOTE: Implemented using Min Binary Heap
 */
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  /**
   * Swap two elements of values array at given indices
   * @param {Number} index1 Index of first of element
   * @param {Number} index2 Index of second element
   */
  _swap(index1, index2) {
    let temp = this.values[index1];
    this.values.splice(index1, 1, this.values[index2]);
    this.values.splice(index2, 1, temp);
  }

  /**
   * Bubble up most recently added value to rightful place in values array
   */
  _bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element.priority >= parent.priority) break;

      this._swap(index, parentIndex);
      index = parentIndex;
    }
  }

  /**
   * Insert value at end of Priority Queue
   * @param {Number} value Value to insert into Priority Queue
   * @returns {Object}
   * 
   * Time complexity: O(n) or O(lg n)(?), due to call of this._bubbleUp()
   */
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this._bubbleUp();
  }

  /**
   * Perform sinking or percolating down effective to complete dequeue removal.
   * Moves the new root node to its appropriate place in the values array.
   */
  _sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];

        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        if ((swap === null && rightChild.priority < element) ||
            (swap !== null && rightChild.priority < leftChild.priority)) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.values[index] = this.values[swap];
      this.values[swap] = element;

      index = swap;
    }
  }

  /**
   * Remove next item in Priority Queue.
   * @returns {Object} Value at previous root
   */
  dequeue() {
    if (this.values.length === 0) return;
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this._sinkDown();
    }

    return min;
  }
}

let ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);

console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
