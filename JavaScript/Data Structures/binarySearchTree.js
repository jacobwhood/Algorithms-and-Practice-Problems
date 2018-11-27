class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return;
        if (value < current.value) { // left
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (value > current.value) { // right
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    
    while (current) {
      if (value === current.value) {
        // return current;   /* Optionally return the found node */
        return true;
      } else if (value < current.value) { // left
        current = current.left;
      } else {  // right
        current = current.right;
      }
    }

    return false;
  }

  // Breadth-first search
  BFS() {
    let data = [], queue = [], node = this.root;
    queue.push(node);

    while(queue.length > 0) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  // Depth first search pre-order
  DFSPreOrder() {
    let data = [], current = this.root;

    const traverse = (node) => {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(current);

    return data;
  }

  // Depth first search post-order
  DFSPostOrder() {
    let data = [], current = this.root;

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    };
    traverse(current);

    return data;
  }

  // Depth first search in-order
  DFSInOrder() {
    let data = [], current = this.root;

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(current);

    return data;
  }

}


let bst = new BinarySearchTree();
bst.insert(10)
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst.BFS());
console.log(bst.DFSPreOrder());
console.log(bst.DFSPostOrder());
console.log(bst.DFSInOrder());
