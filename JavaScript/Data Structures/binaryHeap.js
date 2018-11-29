/**
 * Binary Heap:
 *   - Very similar to binary search tree
 *   - MaxBinaryHeap: parent nodes are always larger than child nodes
 *   - MinBinaryHeap: parent nodes are always smaller than child nodes
 * Max Binary Heap Rules:
 *   - Each parent has at most two child nodes 
 *   - Value of each parent node is always greater than its child nodes 
 *   - In MaxBinaryHeap, parent is greater than the children, but no guarantees between sibling nodes (no implied ordering between siblings)
 *   - Binary heap is as compact as possible. All children of each node are as full as they can be and
 *      left children are filled out first
 * Min Binary Heap Rules:
 *   - Only change is the children node values must be greater than the value of the parent
 * 
 * USE CASES:
 *   - Implement Priority Queues
 *   - Graph traversal algorithms
 * 
 * Storing data:
 *   - Use array
 *   - For any index of an array n, 
 *      - left child is stored at 2n + 1
 *      - right child is stored at 2n + 2
 *   - For any child node at index n,
 *      - Its parent is at index Math.floor((n-1) / 2)
 * 
 * Time Complexity:
 *   - Insertion: O(log n)
 *   - Removal:   O(log n)
 *   - Search:    O(n)
 */

class MaxBinaryHeap {
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

    while(index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) break;

      this._swap(index, parentIndex);
      index = parentIndex;
    }
  }

  /**
   * Insert value into Max Binary Heap.
   * @param {Number} value Value to insert into Max Binary Heap.
   * @returns {Object}
   * 
   * Time complexity: O(log n), due to call of this._bubbleUp()
   */
  insert(value) {
    this.values.push(value);
    this._bubbleUp();
  }

  /**
   * Perform sinking or percolating down effective to complete extractMax removal.
   * Moves the new root node to its appropriate place in the values array.
   */
  _sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while(true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        if (  (swap === null && rightChild > element) || 
              (swap !== null && rightChild > leftChild) ) {
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
   * Delete previous root of Max Binary Heap
   * @returns {Object} Value at previous root
   * 
   * TIme complexity: O(log n), due to call of this._sinkDown()
   */
  extractMax() {
    if (this.values.length === 0) return;
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this._sinkDown();
    }

    return max;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(1);
heap.insert(12);
heap.insert(123);
heap.insert(50);
heap.insert(10);
heap.insert(100);
heap.insert(101);
console.log(heap.extractMax());
console.log(heap.values);
