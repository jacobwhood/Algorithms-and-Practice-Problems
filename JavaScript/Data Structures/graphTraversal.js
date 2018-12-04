/**
 * Graph Traversal exercise
 * 
 * Use cases:
 *   - Peer to peer networking
 *   - Web crawlers
 *   - Finding "closest" matches / recommendations
 *   - Shortest path problems:
 *      - GPS
 *      - Solving mazes
 *      - AI for shortest path to win game
 * 
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * Add vertex to Graph.
   * @param {*} vertex 
   */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  /**
   * Add edge between two vertices.
   * @param {*} vertex1 
   * @param {*} vertex2 
   */
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  /**
   * Remove edge between two vertices.
   * @param {*} vertex1 
   * @param {*} vertex2 
   */
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      val => val !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      val => val !== vertex1
    );
  }

  /**
   * Remove vertex from Graph
   * @param {*} vertex 
   */
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length > 0) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  /**
   * Traverse Graph using depth-first, recursive traversal
   * @param {*} start Entry point in graph from which to begin traversal
   */
  DepthFirstTraversalRecursive(start) {
    const result = [];
    const visited = {};

    const dfs = (vertex) => {
      if (!vertex) return;

      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    };
    dfs(start);

    return result;
  }

  /**
   * Traverse Graph using depth-first, iterative traversal
   * @param {*} start Entry point in graph from which to begin traversal
   */
  DepthFirstTraversalIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (stack.length !== 0) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor)
        }
      });
    }

    return result;
  }

  /**
   * Traverse Graph using breadth-first traversal 
   * @param {*} start 
   */
  BreadthFirstTraversal(start) {
    let queue = [start];
    let result = [];
    let visited = {};
    let currentVertex;

    visited[start] = true;

    while (queue.length > 0) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.DepthFirstTraversalRecursive('A'));
console.log(g.DepthFirstTraversalIterative('A'));
console.log(g.BreadthFirstTraversal('A'));
