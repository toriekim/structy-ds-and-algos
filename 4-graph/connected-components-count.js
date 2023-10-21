// CONNECTED COMPONENTS COUNT
// ------------------------------------------------------------------
// Write a function, connectedComponentsCount, that takes in the
// adjacency list of an undirected graph. The function should return the
// number of connected components within the graph.

// Example:
// connectedComponentsCount({
//   0: [8, 1, 5],
//   1: [0],
//   5: [0, 8],
//   8: [0, 5],
//   2: [3, 4],
//   3: [2, 4],
//   4: [3, 2]
// }); // -> 2

/**
 * Returns the number of connected components of an undirected graph
 * @param  {Object} graph The adjacency list of an undirected graph
 * @return {Number}       The number of connected components
 */

const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();

  for (let node in graph) {
    if (explore(graph, node, visited)) {
      count += 1;
    }
  }

  return count;
};

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;

  visited.add(String(current));

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }

  return true;
};

// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)

export default { connectedComponentsCount, explore };
