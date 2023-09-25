/*
TREE LEVELS
------------------------------------------------------------------
Write a function, treeLevels, that takes in the root of a binary 
tree. The function should return a 2-Dimensional array where each 
subarray represents a level of the tree.

Example:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]
*/

// Breadth First (Iterative)
// n = number of nodes
// Time: O(n)
// Space: O(n)
const treeLevels = (root) => {
  if (root === null) return [];

  const levels = [];
  const queue = [{ node: root, lvl: 0 }];
  while (queue.length > 0) {
    const { node, lvl } = queue.shift();

    if (!levels[lvl]) levels[lvl] = [node.val];
    else levels[lvl].push(node.val);

    if (node.left) queue.push({ node: node.left, lvl: lvl + 1 });
    if (node.right) queue.push({ node: node.right, lvl: lvl + 1 });
  }

  return levels;
};

// Depth First (Recursive)
// n = number of nodes
// Time: O(n)
// Space: O(n)
const treeLevelsRec = (root) => {
  // create result levels array that we'll return
  const levels = [];
  // call recursive helper function to traverse the tree & add nodes from each level
  _treeLevelsRec(root, levels, 0);
  // return levels array
  return levels;
};

const _treeLevelsRec = (root, levels, currentLvl) => {
  // base case: if root is null, we're done traversing this path
  if (root === null) return;

  // if the length of levels is equal to the current level,
  // we're on a new level & need to create level array
  if (levels.length === currentLvl) {
    levels[currentLvl] = [root.val];
  } else {
    // otherwise, add node val to level array
    levels[currentLvl].push(root.val);
  }

  // explore left side
  _treeLevelsRec(root.left, levels, currentLvl + 1);
  // explore right side
  _treeLevelsRec(root.right, levels, currentLvl + 1);
};

export default { treeLevels, treeLevelsRec, _treeLevelsRec };
