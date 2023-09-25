/*
TREE PATH FINDER

Write a function, pathFinder, that takes in the root of a binary tree and a 
target value. The function should return an array representing a path to the 
target value. If the target value is not found in the tree, then return null.

You may assume that the tree contains unique values.

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

pathFinder(a, 'e'); // -> [ 'a', 'b', 'e' ]
*/

// Depth First Recursive
// n = number of nodes
// Time: O(n^2)
// Space: O(n)
const pathFinder = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFinder(root.left, target);
  if (leftPath) return [root.val, ...leftPath];
  const rightPath = pathFinder(root.right, target);
  if (rightPath) return [root.val, ...rightPath];

  return null;
};

// Depth First Recursive w/ push
// n = number of nodes
// Time: O(n)
// Space: O(n)
const pathFinderPush = (root, target) => {
  const result = pathFinderHelper(root, target);
  if (result) return result.reverse();
  else return null;
};

const pathFinderHelper = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFinderHelper(root.left, target);
  if (leftPath) {
    leftPath.push(root.val);
    return leftPath;
  }

  const rightPath = pathFinderHelper(root.right, target);
  if (rightPath) {
    rightPath.push(root.val);
    return rightPath;
  }

  return null;
};

export default { pathFinder, pathFinderPush, pathFinderHelper };
