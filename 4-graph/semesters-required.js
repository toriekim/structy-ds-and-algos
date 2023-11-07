// SEMESTERS REQUIRED
// ------------------------------------------------------------------
// Write a function, semestersRequired, that takes in a number of
// courses (n) and a list of prerequisites as arguments. Courses have
// ids ranging from 0 through n - 1. A single prerequisite of [A, B]
// means that course A must be taken before course B. Return the
// minimum number of semesters required to complete all n courses.
// There is no limit on how many courses you can take in a single
// semester, as long the prerequisites of a course are satisfied
// before taking it.

// Note that given prerequisite [A, B], you cannot take course A and
// course B concurrently in the same semester. You must take A in
// some semester before B.

// You can assume that it is possible to eventually complete all courses.

// Example:
// const numCourses = 6;
// const prereqs = [
//   [1, 2],
//   [2, 4],
//   [3, 5],
//   [0, 5],
// ];
// semestersRequired(numCourses, prereqs); // -> 3

/**
 * Returns the minimum number of semesters required to complete n courses
 * @param   {Number} numCourses n courses (ids 0 through n -1)
 * @param   {Array}  prereqs    2D array of prerequisites [A, B]
 * @returns {Number}            min # of semesters required to complete all n courses
 */

// Directed Acyclic Graph -> Prereqs array = edges
// Similar to Longest Path problem

const semestersRequired = (numCourses, prereqs) => {
  // Build adjacency graph
  const graph = buildGraph(numCourses, prereqs);

  // Build distance map to mark terminal nodes -> base case
  const distance = {};
  for (let course in graph) {
    if (graph[course].length === 0) {
      // Mark terminal nodes with value of 1
      distance[course] = 1;
    }
  }

  // Iterate through nodes in graph recursively
  for (let course in graph) {
    traverseDistance(graph, course, distance);
  }

  // Return the max distance
  return Math.max(...Object.values(distance));
};

const traverseDistance = (graph, node, distance) => {
  // Base case -> If node is in distance map, return value
  if (node in distance) return distance[node];

  // Set variable: Distance of current node to terminal node
  let maxDistance = 0;
  // Iterate through neighbor nodes
  for (let neighbor of graph[node]) {
    const neighborDistance = traverseDistance(graph, neighbor, distance);
    // Grab the higher distance and reassign
    if (neighborDistance > maxDistance) maxDistance = neighborDistance;
  }

  // Add current node's distance to map and return value
  distance[node] = maxDistance + 1;
  return distance[node];
};

const buildGraph = (numCourses, prereqs) => {
  const graph = {};
  // Since courses have ids ranging from 0 to numCourses-1,
  // use numCourses to populate indices on graph
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  for (let prereq of prereqs) {
    const [a, b] = prereq;
    // Directed Acyclic graph, so only set b to a
    graph[a].push(b);
  }
  return graph;
};

// p = # prereqs
// c = # courses
// Time: O(p)
// Space: O(c)

export default { semestersRequired, traverseDistance, buildGraph };
