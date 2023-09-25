/*
HOW HIGH

Write a function, howHigh, that takes in the root of a binary tree. 
The function should return a number representing the height of the tree.

The height of a binary tree is defined as the maximal number of edges 
from the root node to any leaf node.

If the tree is empty, return -1.

Example:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

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

howHigh(a); // -> 2
*/

// Depth First Iterative
// n = number of nodes
// Time Complexity: O(n)
// Space Complexity: O(n)
const howHigh = (root) => {
  if (root === null) return -1;
  let maxHeight = 0;
  let stack = [[root, 0]];
  while (stack.length > 0) {
    const [current, height] = stack.pop();
    maxHeight = Math.max(maxHeight, height);

    if (current.left) stack.push([current.left, height + 1]);
    if (current.right) stack.push([current.right, height + 1]);
  }

  return maxHeight;
};

const howHighRec = (root) => {
  if (root === null) return -1;

  const leftHeight = howHighRec(root.left);
  const rightHeight = howHighRec(root.right);
  return 1 + Math.max(leftHeight, rightHeight);
};
