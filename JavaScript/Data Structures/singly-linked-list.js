class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Inserts value at end of linked-list.
   * @param {Number} val Value to store at new node.
   * @returns {Object} newly-updated linked-list
   */
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
    return this;
  }

  /**
   * Removes and returns last node in list or null if linked-list is empty.
   * @returns {Object} removed node from end of list, undefined if linked-list is empty.
   */
  pop() {
    if (!this.head) return;
    let current = this.head;
    let newTail = current;
    
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  /**
   * Remove node from beginning of linked-list.
   * @returns {Object} removed node.
   */
  shift() {
    if (this.length === 0) return;
    let removed = this.head;
    this.head = this.head.next;
    this.length -= 1;

    if (this.length === 0) {
      this.tail = null;
    }
    return removed;
  }

  /**
   * Add node to beginning of linked-list.
   * @param {Number} val Value to insert into linked-list.
   * @returns newly-updated linked-list.
   */
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return this;
  }

  /**
   * Retrieve element in linked-list at given index.
   * @param {Number} index Index of element to retrieve.
   * @returns {(null | Object)} Found Node at index, if it exists. Otherwise null.
   */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (!this.head) return null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  /**
   * Set the value of a node at the given position in the linked-list.
   * @param {Number} index Index of element to set.
   * @param {Any} value New value used to update node's value.
   * @returns {Boolean} Indicator if set operation was successful.
   */
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  /**
   * Insert a new node with the given value at index.
   * @param {Number} index Index in linked-list to insert new node.
   * @param {Any} value New value assigned to newly-inserted node.
   * @returns {Boolean} Indicator if set operation was successful.
   */
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    let newNode = new Node(value);
    let prev = this.get(index - 1);
    let prevNext = prev.next;
    prev.next = newNode;
    newNode.next = prevNext;
    this.length += 1;
    return true;
  }

  /**
   * Remove node from linked-list at given index.
   * @param {Number} index Index of node to remove.
   * @returns {(undefined | Object)} Removed node at given index, if exists, otherwise undefined.
   */
  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length -= 1;
    return prev;
  }

  /**
   * Reverse the order nodes in the linked-list. (IN PLACE)
   * @returns newly reversed linked-list.
   */
  reverse() {
    if (this.length === 0) return false;
    let current = this.head, previous = null, next = null;
    this.head = this.tail;
    this.tail = current;

    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push('HELLO');
list.push('GOODBYE');
list.push('!');
list.push('<3');
list.push(':)');
list.push('$');
list.reverse();
console.log(list.head);
