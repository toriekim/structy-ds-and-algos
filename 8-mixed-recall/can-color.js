// CAN COLOR
// -----------------------------------------------------------------
// Write a function, canColor, that takes in an object representing
// the adjacency list of an undirected graph. The function should
// return a boolean indicating whether or not it is possible to
// color nodes of the graph using two colors in such a way that
// adjacent nodes are always different colors.

// For example, given this graph:

// x-y-z

// It is possible to color the nodes by using red for x and z,
// then use blue for y. So the answer is true.

// For example, given this graph:

//     q
//    / \
//   s - r

// It is not possible to color the nodes without making two
// adjacent nodes the same color. So the answer is false.

// EXAMPLE 00:
// canColor({
//   x: ["y"],
//   y: ["x","z"],
//   z: ["y"]
// }); // -> true

const canColor = (graph) => {
  // Initialize an object map to keep track of visited nodes
  const visited = {};

  // Loop through nodes in adjacency graph
  for (let node in graph) {
    // If we haven't visited this node before, visit & explore neighbors
    if (!(node in visited)) {
      // If coloring current node returns false, alternate coloring not possible
      if (!colorGraph(node, graph, visited, false)) {
        return false;
      }
    }
  }
  // Finished coloring all nodes in graph, alternate coloring possible
  return true;
};

const colorGraph = (node, graph, visited, currentColor) => {
  // If current node has been colored, check if it matches current color
  if (node in visited) return visited[node] === currentColor;

  // Otherwise, add current node to visited with current color
  visited[node] = currentColor;

  // Explore neighbors of current node
  for (let neighbor of graph[node]) {
    if (!colorGraph(neighbor, graph, visited, !currentColor)) return false;
  }

  return true;
};

// Complexity:
// n = number of nodes
// Time: O(n^2) -> will travel through every edge (or O(e) where e is the # of edges)
// Space: O(n) -> recursion stack & storing visited nodes

export default { canColor };
