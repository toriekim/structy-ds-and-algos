/*
TREE MIN VALUE

Write a function, treeMinValue, that takes in the root of a binary tree 
that contains number values. The function should return the minimum 
value within the tree.

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

treeMinValue(a); // -> -2
*/

// Iterative
// n = number of nodes
// Time Complexity: O(n)
// Space Complexity: O(n)
const treeMinValue = (root) => {
  let queue = [root];
  // let stack = [root]
  let minValue = Infinity;

  while (queue.length) {
    const current = queue.shift();
    // const current = stack.pop()
    minValue = Math.min(current.val, minValue);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return minValue;
};

// Recursive
// n = number of nodes
// Time Complexity: O(n)
// Space Complexity: O(n)
const treeMinValueRec = (root) => {
  if (root === null) return Infinity;

  const leftMin = treeMinValueRec(root.left);
  const rightMin = treeMinValueRec(root.right);

  return Math.min(root.val, leftMin, rightMin);
};

export default { treeMinValue, treeMinValueRec };
