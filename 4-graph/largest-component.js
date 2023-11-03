// LARGEST COMPONENT
// ------------------------------------------------------------------
// Write a function, largestComponent, that takes in the adjacency 
// list of an undirected graph. The function should return the size 
// of the largest connected component in the graph.

// Example:
// largestComponent({
//   0: ['8', '1', '5'],
//   1: ['0'],
//   5: ['0', '8'],
//   8: ['0', '5'],
//   2: ['3', '4'],
//   3: ['2', '4'],
//   4: ['3', '2']
// }); // -> 4

/**
 * Returns the size of the largest connected component in graph
 * @param   {Object} graph Adjacency list of an undirected graph
 * @returns {Number}       Size of the largest connected component
 */

// Depth-first recursive
const largestComponent = (graph) => {
  const visited = new Set();
  let largest = 0;

  for (let node in graph) {
    const size = exploreSize(graph, node, visited);
    if (size > largest) largest = size;
  }

  return largest;
};

const exploreSize = (graph, current, visited) => {
  if (visited.has(node)) return 0;

  visited.add(current);

  let size = 1;
  for (let neighbor of graph[current]) {
    size += exploreSize(neighbor, current, visited);
  }

  return size;
};
// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)

export default { largestComponent, exploreSize }