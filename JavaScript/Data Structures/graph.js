/**
 * Graph
 *  - Implemented using adjacency matrix or adjacency list
 *  - Will implement using adjacency list because most data in real world
 *     tends to lend itself to sparser and/or larger graphs
 *  
 * Uses:
 *  - Social networks
 *  - Location / mapping
 *  - Routing algorithms
 *  - Visual hierarchy
 *  - File system optimizations
 * 
 * Time Complexity Adjacency List vs Adjacency Matrix:
 *                              |V| number of vertices
 *                              |E| number of edges
 *                  Adjacency List                   Adjacency Matrix
 *  Add vertex         O(1)                               O(|V^2|)
 *  Add edge           O(1)                               O(1)
 *  Remove vertex      O(|V| + |E|)                       O(|V^2|)
 *  Remove edge        O(|E|)                             O(1)
 *  Query              O(|V| + |E|)                       O(1)
 *  Storage            O(|V| + |E|)                       O(|V^2|)
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
}

let g = new Graph();
g.addVertex('tokyo');
g.addVertex('san francisco');
g.addEdge('tokyo', 'san francisco');
g.removeEdge('tokyo', 'san francisco');
console.log(g);
