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
 */

class MaxBinaryHeap {
  constructor() {
    this.__values = [];
  }

  /**
   * Swap two elements of __values array at given indices
   * @param {Number} index1 Index of first of element
   * @param {Number} index2 Index of second element
   */
  __swap(index1, index2) {
    let temp = this.__values[index1];
    this.__values.splice(index1, 1, this.__values[index2]);
    this.__values.splice(index2, 1, temp);
  }

  /**
   * Bubble up most recently added value to rightful place in values array
   */
  __bubbleUp() {
    let index = this.__values.length - 1;
    const element = this.__values[index];

    while(index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.__values[parentIndex];

      if (element <= parent) break;

      this.__swap(index, parentIndex);
      index = parentIndex;
    }
  }

  /**
   * Insert value into Max Binary Heap.
   * @param {Number} value Value to insert into Max Binary Heap.
   * @returns {Object}
   * 
   * Time complexity: O(n), due to call of this.__bubbleUp()
   */
  insert(value) {
    this.__values.push(value);
    this.__bubbleUp();
    
    return this;
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
console.log(heap.__values);
