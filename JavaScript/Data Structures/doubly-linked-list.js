class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Inserts value at end of doubly-linked-list.
   * @param {Number} val Value to store at new node.
   * @returns {Object} newly-updated doubly-linked-list
   */
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  /**
   * Removes and returns last node in doubly-linked list or null if doubly-linked-list is empty.
   * @returns {Object} removed node from end of list, undefined if doubly-linked-list is empty.
   */
  pop() {
    if (!this.tail) return
    let removed = this.tail;
    this.tail = removed.prev;
    this.tail.next = null;

    this.length--;
    return removed;
  }

  /**
   * Remove node from beginning of doubly-linked-list.
   * @returns {Object} removed node.
   */
  shift() {
    let removed;
    if (!this.head) return;
    else if (this.length === 1) {
      removed = this.head;
      this.head = null;
      this.tail = null;
    } else {
      removed = this.head;
      this.head = removed.next;
      this.head.prev = null;
    }
    
    this.length--;
    return removed;
  }

  /**
   * Add node to beginning of doubly-linked-list.
   * @param val Value to insert at beginning of doubly-linked-list.
   * @returns newly-updated doubly-linked-list.
   */
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head.next;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  /**
   * Retrieve element in doubly-linked-list at given index.
   * @param {Number} index Index of element to retrieve.
   * @returns {(null | Object)} Found Node at index, if it exists. Otherwise null.
   */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  /**
   * Set the value of a node at the given position in the doubly-linked-list.
   * @param {Number} index Index of element to set.
   * @param {Any} value New value used to update node's value.
   * @returns {Boolean} Indicator if set operation was successful.
   */
  set(index, value) {
    let node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }

  /**
   * Insert a new node with the given value at index.
   * @param {Number} index Index in doubly-linked-list to insert new node.
   * @param {Any} value New value assigned to newly-inserted node.
   * @returns {Boolean} Indicator if set operation was successful.
   */
  insert(index, value) {
    if (index < 0 || index >= this.length) return false;
    else if (index === 0) return this.unshift(value);
    else if (index === this.length) return this.push(value);
    
    let newNode = new Node(value);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  /**
   * Remove node from doubly-linked-list at given index.
   * @param {Number} index Index of node to remove.
   * @returns {(undefined | Object)} Removed node at given index, if exists, otherwise undefined.
   */
  remove(index) {
    if (index < 0 || index >= this.length) return;
    else if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.prev = null;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }

  /**
   * Reverse the order nodes in the linked-list. (IN PLACE)
   * @returns newly reversed doubly-linked-list.
   */
  reverse() {
    
  }

}

let list = new DoublyLinkedList();
list.push('hello world');
list.push(100);
list.push('last');
list.push('jk');
list.pop();
list.set(0, 'howdy world');
list.insert(1, 'inserted');
console.log(list);
