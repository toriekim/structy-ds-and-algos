// HAS PATH
// ------------------------------------------------------------------
// Write a function, hasPath, that takes in an object representing
// the adjacency list of a directed acyclic graph and two nodes (src,
// dst). The function should return a boolean indicating whether or
// not there exists a directed path between the source and destination
// nodes.

// Example:
// const graph = {
//   f: ['g', 'i'],
//   g: ['h'],
//   h: [],
//   i: ['g', 'k'],
//   j: ['i'],
//   k: []
// };

// hasPath(graph, 'f', 'k'); // true

/**
 * Return a boolean indicating whether or not a directed path between
 * the source and the destination exists
 * @param  {Object}  graph A directed acyclic graph
 * @param  {String}  src   The source node
 * @param  {String}  dst   The destination node
 * @return {Boolean}       True if the path exists
 */

// Iterative
// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)
// Note: the JavaScript shift() methods runs in linear time, so the complexity is really O(e^2).

const hasPath = (graph, src, dst) => {
  const queue = [src];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dst) return true;

    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};

// Depth-first Iterative:
// const hasPath = (graph, src, dst) => {
//   const stack = [src];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     if (current === dst) return true;

//     for (const neighbor of graph[current]) {
//       stack.push(neighbor);
//     }
//   }
//   return false;
// };

// Depth-first Recursive
// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)
const hasPathRecursive = (graph, src, dst) => {
  if (src === dst) return true;

  for (const neighbor of graph[src]) {
    if (hasPathRecursive(graph, neighbor, dst) === true) return true;
  }

  return false;
};

export default { hasPath, hasPathRecursive };
