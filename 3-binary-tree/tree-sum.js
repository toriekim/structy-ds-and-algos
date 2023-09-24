/*
TREE SUM

Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.

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

treeSum(a); // -> 21
*/

// Iterative
// n = number of nodes
// Time Complexity: O(n)
// Space Complexity: O(n)
const treeSum = (root) => {
  if (root === null) return 0;

  let stack = [root];
  let sum = 0;

  while (stack.length > 0) {
    const current = stack.pop();
    sum += current.val;

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return sum;
};

// Recursive
// n = number of nodes
// Time Complexity: O(n)
// Space Complexity: O(n)
const treeSumRec = (root) => {
  if (root === null) return 0;

  return root.val + treeSumRec(root.left) + treeSumRec(root.right);
};
