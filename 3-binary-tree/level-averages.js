/*
TREE LEVELS

Write a function, treeLevels, that takes in the root of a binary tree.
The function should return a 2-Dimensional array where each subarray 
represents a level of the tree.

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

// Depth-first Iterative
// n = number of nodes
// Time: O(n)
// Space: O(n)
const levelAverages = (root) => {
  if (root === null) return [];

  const stack = [[root, 0]];
  const sumAtLvl = [];

  while (stack.length) {
    const [node, lvl] = stack.pop();

    if (!sumAtLvl[lvl]) {
      sumAtLvl[lvl] = { sum: node.val, count: 1 };
    } else {
      sumAtLvl[lvl].sum += node.val;
      sumAtLvl[lvl].count++;
    }

    if (node.left) stack.push([node.left, lvl + 1]);
    if (node.right) stack.push([node.right, lvl + 1]);
  }

  const averages = [];
  for (const lvl of sumAtLvl) {
    const { sum, count } = lvl;
    averages.push(sum / count);
  }
  return averages;
};

// Recursive
// n = number of nodes
// Time: O(n)
// Space: O(n)
const levelAveragesRec = (root) => {
  const levels = [];
  fillLevels(root, levels, 0);
  return levels.reduce((acc, level) => {
    let sum = 0;
    for (let num of level) {
      sum += num;
    }
    const average = sum / level.length;
    return [...acc, average];
  }, []);
};

const fillLevels = (root, levels, levelNum) => {
  if (root === null) return;

  if (levels.length === levelNum) {
    levels[levelNum] = [root.val];
  } else {
    levels[levelNum].push(root.val);
  }

  fillLevels(root.left, levels, levelNum + 1);
  fillLevels(root.right, levels, levelNum + 1);
};

export default { levelAverages, levelAveragesRec };
