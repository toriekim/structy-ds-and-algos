// HAS CYCLE
// -----------------------------------------------------------------
// Write a function, hasCycle, that takes in an object representing
// the adjacency list of a directed graph. The function should return
// a boolean indicating whether or not the graph contains a cycle.

// Example:
// hasCycle({
//   a: ["b"],
//   b: ["c"],
//   c: ["a"],
// }); // -> true

/**
 * hasCycle returns a boolean indicating if a directed graph contains a cycle
 * @param   {Object}  graph  Adjacency list of a directed graph
 * @returns {Boolean}        True if the graph contains a cycle
 */
const hasCycle = (graph) => {
  // Initialize 2 Sets to keep track of processing nodes during DFS
  // Visiting to mark traversal in progress to find cycle
  // Visited to mark that the current node and its neighbors have been checked for a cycle already and none was found
  const visiting = new Set();
  const visited = new Set();

  for (let node in graph) {
    if (cycleDetect(graph, node, visiting, visited)) return true;
  }

  return false;
};

const cycleDetect = (graph, node, visiting, visited) => {
  // If the node is in visited, it's a safe node and there were no cycles
  if (visited.has(node)) return false;
  // If the node is in visiting, there's a cycle
  if (visiting.has(node)) return true;

  // Add current node to visiting Set
  visiting.add(node);

  // Iterate through neighbors
  for (let neighbor of graph[node]) {
    // If there was a cycle, return true
    if (cycleDetect(graph, neighbor, visiting, visited)) return true;
  }
  // "Process" current node by removing from visiting and mark it as visited
  // A node can only be in one of these Sets at a given time
  visiting.delete(node);
  visited.add(node);
  return false;
};

// n = number of nodes
// Time: O(n^2)
// Space: O(n)

export default { hasCycle };
