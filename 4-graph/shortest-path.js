// SHORTEST PATH
// ------------------------------------------------------------------
// Write a function, shortestPath, that takes in an array of edges
// for an undirected graph and two nodes (nodeA, nodeB). The function
// should return the length of the shortest path between A and B.
// Consider the length as the number of edges in the path, not the
// number of nodes. If there is no path between A and B, then return -1.

// Example:
// const edges = [
//   ['w', 'x'],
//   ['x', 'y'],
//   ['z', 'y'],
//   ['z', 'v'],
//   ['w', 'v']
// ];

// shortestPath(edges, 'w', 'z'); // -> 2

/**
 * shortestPath returns the length of the shortest path between A and B
 * @param  {Array}  edges Array of edges for undirected graph
 * @param  {String} nodeA Source node
 * @param  {String} nodeB Destination node
 * @return {Number}       Length of shortest path or -1 if no path
 */

const shortestPath = (edges, nodeA, nodeB) => {
  // First, create adjacency list of graph
  const graph = buildGraph(edges);
  // Initialize Set to keep track of vistied nodes
  const visited = new Set([nodeA]);
  // Since we're working with an undirected graph and trying to find shortest path,
  // use breadth-first + queue to explore all directions
  // Memo it with distance from source node
  const queue = [[nodeA, 0]];

  while (queue.length > 0) {
    // Grab current node from queue to process
    const [node, distance] = queue.shift();
    // If current node is the destination node, return distance
    if (node === nodeB) return distance;
    // Explore all neighboring nodes of current node
    for (let neighbor of graph[node]) {
      // If we haven't visited the neighbor yet...
      if (!visited.has(neighbor)) {
        // Add to visited Set and to the queue, increment distance by 1
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  // If there is no path after exploring paths, return -1
  return -1;
};

/**
 *
 * @param   {Array}  edges Array of edges
 * @returns {Object}       Adjacency graph
 */
const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [nodeA, nodeB] = edge;
    if (!(nodeA in graph)) graph[nodeA] = [];
    if (!(nodeB in graph)) graph[nodeB] = [];

    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
  }
  return graph;
};

// e = number edges
// Time: O(e)
// Space: O(e)

export default { shortestPath };
