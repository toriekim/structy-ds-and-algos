// UNDIRECTED PATH
// ------------------------------------------------------------------
// Write a function, undirectedPath, that takes in an array of edges
// for an undirected graph and two nodes (nodeA, nodeB). The function
// should return a boolean indicating whether or not there exists a
// path between nodeA and nodeB.

// Example:
// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// undirectedPath(edges, 'j', 'm'); // -> true

/**
 * undirectedPath returns a boolean indicating whether or not there
 * exists a path between nodeA and nodeB
 * @param  {Array}   edges  An array of edges for an undirected graph
 * @param  {String}  nodeA  The source node
 * @param  {String}  nodeB  The target node
 * @return {Boolean}        True if path exists
 */

// Approach:
// First, create an adjacency map from edges array
// Create a visited Set to keep track of the nodes already visited since this is undirected graph
// DFS recursively to find if there's a path

// Depth-first recursive
// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(e)
const createGraph = (edgesArray) => {
  const graph = {};
  for (let edge of edgesArray) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const undirectedPath = (edges, nodeA, nodeB) => {
  // Create an adjacency map from edges array
  const graph = createGraph(edges);
  // Create a Set to keep track of visited nodes
  const visited = new Set();
  // Recursively search for a path between nodes
  return hasPath(graph, nodeA, nodeB, visited);
};

const hasPath = (graph, src, dst, visited) => {
  // If current is the destination, return true
  if (src === dst) return true;
  // If we have already visited this node, return false
  if (visited.has(src)) return false;
  // Add current node to visited
  visited.add(src);

  // Loop through current node's neighbors to find a path
  for (let neighbor of graph[src]) {
    // If one of these "paths" returns true, return true
    if (hasPath(graph, neighbor, dst, visited)) {
      return true;
    }
  }

  // If all nodes have been visited and haven't found destination, return false
  return false;
};

export default { createGraph, undirectedPath, hasPath };
