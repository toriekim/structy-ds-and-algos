// TOPOLOGICAL ORDER
// -----------------------------------------------------------------
// Write a function, topologicalOrder, that takes in an object
// representing the adjacency list for a directed-acyclic graph.
// The function should return an array containing the
// topological-order of the graph.

// The topological ordering of a graph is a sequence where "parent
// nodes" appear before their "children" within the sequence.

// topologicalOrder({
//   a: ["f"],
//   b: ["d"],
//   c: ["a", "f"],
//   d: ["e"],
//   e: [],
//   f: ["b", "e"],
// }); // -> ['c', 'a', 'f', 'b', 'd', 'e']

// Approach:
// First, create a map of # of parents each node has
// Then, find the starting node with no parent
// Create a stack to keep track of the nodes to be processed & add starting node
// Pop off stack, add to order array, subtract 1 from numParents for each of that node's children
//   Check if child node is ready to be processed -> when it has 0 parents in map
// Return order array

const topologicalOrder = (graph) => {
  // First, create a map of # of parents each node has
  const numParents = {};
  // Initialize each node to 0
  for (let node in graph) {
    numParents[node] = 0;
  }
  // Populate map with number of parents
  for (let node in graph) {
    for (let child of graph[node]) {
      numParents[child]++;
    }
  }

  // Find the starting node & add it to the stack to be processed
  const ready = [];
  for (let node in numParents) {
    if (numParents[node] === 0) {
      ready.push(node);
    }
  }

  // Create order array and traverse graph to add nodes
  const order = [];
  while (ready.length > 0) {
    const node = ready.pop();
    order.push(node);
    // Decrement node's children by 1 parent in map
    for (let child of graph[node]) {
      numParents[child]--;
      // If child has no parents, it's ready to be processed
      if (numParents[child] === 0) {
        ready.push(child);
      }
    }
  }
  return order;
};

// e = number of edges
// n = number of nodes
// Time: O(e + n)
// Space: O(n)

export default { topologicalOrder };
