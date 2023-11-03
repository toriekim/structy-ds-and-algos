// ------------------------------------------------------------------

// Iterative
// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)
// Note: For breadth-frist, the JavaScript shift() methods runs in linear time, so the complexity is really O(e^2)

// Depth-first Recursive
// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)

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

export default { buildGraph };
