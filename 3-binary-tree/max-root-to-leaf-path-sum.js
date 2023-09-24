/*
MAX ROOT TO LEAF PATH SUM

Write a function, maxPathSum, that takes in the root of a binary tree 
that contains number values. The function should return the maximum sum 
of any root to leaf path within the tree.

You may assume that the input tree is non-empty.

Example:
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

maxPathSum(a); // -> 18
*/

// Depth First (Recursive)
// n = number of nodes
// Time: O(n)
// Space: O(n)
const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};

export default maxPathSum;
