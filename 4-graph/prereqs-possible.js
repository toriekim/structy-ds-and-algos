// PREREQS POSSIBLE
// -----------------------------------------------------------------
// Write a function, prereqsPossible, that takes in a number of
// courses (n) and prerequisites as arguments. Courses have ids
// ranging from 0 through n - 1. A single prerequisite of [A, B]
// means that course A must be taken before course B. The function
// should return a boolean indicating whether or not it is possible
// to complete all courses.

// Example:
// const numCourses = 6;
// const prereqs = [
//   [0, 1],
//   [2, 3],
//   [0, 2],
//   [1, 3],
//   [4, 5],
// ];
// prereqsPossible(numCourses, prereqs); // -> true

/**
 * prereqsPossible returns a boolean indicating whether or not it
 * is possible to complete all courses
 * @param   {Number}  numCourses n number of courses
 * @param   {Array}   prereqs    2D array of prerequisites (edges)
 * @returns {Boolean}            True if possible to complete
 */

// This is similar to the "Has Cycle" problem -> need to check if
// there is a cycle because if there is, not possible to complete
// all courses

const prereqsPossible = (numCourses, prereqs) => {
  // Build adjacency list
  const graph = buildGraph(numCourses, prereqs);
  // Initialize variables to keep track of nodes
  const visiting = new Set();
  const visited = new Set();
  // Iterate through nodes in graph
  for (let node of graph) {
    // If a cycle is found, return false (can't complete all)
    if (detectCycle(graph, node, visiting, visited)) {
      return false;
    }
  }
  // If no cycle was found, return true (can complete all)
  return true;
};

const detectCycle = (graph, node, visiting, visited) => {
  // If node in visiting, found a cycle
  if (visiting.has(node)) return true;
  // If node in visited, no need to continue, no cycle found
  if (visited.has(node)) return false;

  // Add current node to visiting Set
  visiting.add(node);

  // Traverse through current's neighbors
  for (let neighbor of graph[node]) {
    // If encounter another node in visiting, found a cycle
    if (detectCycle(graph, neighbor, visiting, visited)) {
      return true;
    }
  }
  // Done processing node, so remove from visiting & mark as visited
  visiting.delete(node);
  visited.add(node);
  return false;
};

const buildGraph = (numCourses, prereqs) => {
  const graph = {};
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  for (let [a, b] of prereqs) {
    graph[a].push(b);
  }
  return graph;
};

export default { prereqsPossible, detectCycle, buildGraph };
