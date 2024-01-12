// RARE ROUTING
// -----------------------------------------------------------------
// Write a function, rareRouting, that takes in a number of cities
// (n) and a two dimensional array where each subarray represents a
// direct road that connects a pair of cities. The function should
// return a boolean indicating whether or not there exists a unique
// route for every pair of cities. A route is a sequence of roads
// that does not visit a city more than once.

// Cities will be numbered 0 to n - 1.

// You can assume that all roads are two-way roads. This means if
// there is a road between A and B, then you can use that road to
// go from A to B or go from B to A.

// For example, given these roads:
// 0 --- 1
// | \
// |  \
// |   \
// 2    3

// There is a unique route for between every pair of cities.
// So the answer is true.

// For example, given these roads:
// 0 --- 1
// | \
// |  \
// |   \
// 2 -- 3

// There are two routes that can be used to travel from city 1 to city 2:
// - first route:  1, 0, 2
// - second route: 1, 0, 3, 2
// The answer is false, because routes should be unique.

// rareRouting(4, [
//   [0, 1],
//   [0, 2],
//   [0, 3]
// ]); // -> true

const rareRouting = (n, roads) => {
  // Create adjacency graph
  const graph = createGraph(n, roads);
  // Initialize visited Set to keep track of routes
  const visited = new Set();
  // Traverse the graph DFS to find routes
  const valid = validate('0', graph, visited, null);
  // Return if all routes are unique & each city visited
  return valid && visited.size === n;
};

const validate = (node, graph, visited, prevNode) => {
  // If current city has been visited, route is not unique
  if (visited.has(node)) return false;

  // Otherwise, add city to visited set
  visited.add(node);

  // Explore neighboring connected cities
  for (let neighbor of graph[node]) {
    // If neighbor isn't the previous city (undirected graph)
    if (neighbor !== prevNode) {
      // Explore route recursively & if not unique, return false
      if (!validate(neighbor, graph, visited, node)) {
        return false;
      }
    }
  }

  // After all cities visited, all routes are unique
  return true;
};

const createGraph = (n, roads) => {
  const graph = {};

  for (let city = 0; city < n; city++) {
    graph[city] = [];
  }

  for (let [a, b] of roads) {
    // Make certain Stringify each city value
    graph[a].push(String(b));
    graph[b].push(String(a));
  }

  return graph;
};

// Complexity:
// n = number of nodes
// Time: O(n^2) -> exploring all edges
// Space: O(n) -> creating Set to keep track of visited nodes

export default { rareRouting, validate, makeGraph };
