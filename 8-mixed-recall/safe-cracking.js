// SAFE CRACKING
// -----------------------------------------------------------------
// Oh-no! You forgot the number combination that unlocks your safe.
// Luckily, you knew that you'd be forgetful so you previously
// wrote down a bunch of hints that can be used to determine the
// correct combination. Each hint is a pair of numbers 'x, y' that
// indicates you must enter digit 'x' before 'y' (but not
// necessarily immediately before y).

// The keypad on the safe has digits 0-9. You can assume that the
// hints will generate exactly one working combination and that a
// digit can occur zero or one time in the answer.

// Write a function, safeCracking, that takes in an array of hints
// as an argument and determines the combination that will unlock
// the safe. The function should return a string representing the
// combination.

// safeCracking([
//   [7, 1],
//   [1, 8],
//   [7, 8],
// ]); // -> '718'

// Approach:
// This is an extension of topological graph problem
// Treat this as a graph problem by first creating an adjacency graph
// Then, from there, it's same solution as topological graph order

const safeCracking = (hints) => {
  const graph = createGraph(hints);
  const numParents = createParentsMap(graph);

  const ready = [];
  for (let node in numParents) {
    if (numParents[node] === 0) ready.push(node);
  }

  let combo = '';
  while (ready.length > 0) {
    const current = ready.pop();
    combo += current;
    for (let child of graph[current]) {
      numParents[child]--;
      if (numParents[child] === 0) ready.push(child);
    }
  }

  return combo;
};

const createGraph = (hints) => {
  const graph = {};
  for (let [a, b] of hints) {
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
  }
  return graph;
};

const createParentsMap = (graph) => {
  const map = {};
  for (let node in graph) {
    map[node] = 0;
  }
  for (let node in graph) {
    for (let child of graph[node]) {
      map[child]++;
    }
  }
  return map;
};

// Structy solution:
// const safeCracking = (hints) => {
//   const graph = buildGraph(hints);
//   return topologicalOrder(graph);
// };

// const buildGraph = (edges) => {
//   const graph = {};

//   for (let edge of edges) {
//     const [ a, b ] = edge;
//     if (!(a in graph)) graph[a] = [];
//     if (!(b in graph)) graph[b] = [];

//     graph[a].push(b);
//   }

//   return graph;
// };

// const topologicalOrder = (graph) => {
//   const numParents = {};
//   for (let node in graph) {
//     numParents[node] = 0;
//   }

//   for (let node in graph) {
//     for (let child of graph[node]) {
//       numParents[child] += 1;
//     }
//   }

//   const ready = [];
//   for (let node in numParents) {
//     if (numParents[node] === 0) ready.push(node);
//   }

//   let order = '';
//   while (ready.length > 0) {
//     const node = ready.pop();
//     order += node;
//     for (let child of graph[node]) {
//       numParents[child] -= 1;
//       if (numParents[child] === 0) ready.push(child)
//     }
//   }

//   return order;
// };

// e = number of hints
// Time: O(e)
// Space: O(e)

export default { safeCracking, createGraph, createParentsMap };
