// LONGEST PATH
// ------------------------------------------------------------------
// Write a function, longestPath, that takes in an adjacency list for
// a directed acyclic graph. The function should return the length of
// the longest path within the graph. A path may start and end at any
// two nodes. The length of a path is considered the number of edges
// in the path, not the number of nodes.

// Example:
// const graph = {
//   a: ['c', 'b'],
//   b: ['c'],
//   c: []
// };

// longestPath(graph); // -> 2

/**
 * longestPath explores a graph and returns the length of the longest path
 * @param   {Object} graph Adjacency list for directed acyclic graph
 * @returns {Number}       Length (# of edges) of longest path within graph
 */

const longestPath = (graph) => {
  // Build distance map from graph and populate with terminal nodes
  // Helps us with recursive base case and to keep track of visited nodes
  const distance = {};
  for (let node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0;
    }
  }

  // Iterate through graph nodes to populate distance map
  for (let node in graph) {
    traverse(graph, node, distance);
  }

  // Return the max value from distance map
  return Math.max(...Object.values(distance));
};

const traverse = (graph, node, distance) => {
  // Base case: If current node is in distance map, return its distance value
  // Terminal nodes will have distance of 0
  if (node in distance) return distance[node];

  // Initialze variable to keep track of max length from current node
  let maxDistance = 0;
  // Loop through current node's neighbors
  for (const neighbor of graph[node]) {
    // Recursive call on neighbor node
    const attempt = traverse(graph, neighbor, distance);
    // Reassign max if attempt yields higher value
    // Edge case: If a node points to 2 neighbors (one terminal & one not),
    // we want to grab the max distance (terminal has distance of 0, the other has distance > 0)
    if (attempt > maxDistance) maxDistance = attempt;
  }

  // Memo current node to distance map w/ maxDistance + 1
  distance[node] = 1 + maxDistance;
  // Return current node's distance from terminal node
  return distance[node];
};

// e = # edges
// n = # nodes
// Time: O(e)
// Space: O(n)

export default { longestPath, traverse };
