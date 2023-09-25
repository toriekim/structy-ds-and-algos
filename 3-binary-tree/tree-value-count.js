/*
TREE VALUE COUNT

Write a function, treeValueCount, that takes in the root of a binary 
tree and a target value. The function should return the number of times
that the target occurs in the tree.

Example:
const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

treeValueCount(a,  6); // -> 3
*/

// Depth First Iterative
// n = number of nodes
// Time: O(n)
// Space: O(n)
const treeValueCount = (root, target) => {
  if (root === null) return 0;

  let count = 0;
  let stack = [root];
  while (stack.length) {
    const current = stack.pop();
    if (current.val === target) count += 1;

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return count;
};

// Depth First Recursive
// n = number of nodes
// Time: O(n)
// Space: O(n)
const treeValueCountRec = (root, target, count = 0) => {
  if (root === null) return 0;
  const match = root.val === target ? 1 : 0;

  return (
    match +
    treeValueCountRec(root.left, target) +
    treeValueCountRec(root.right, target)
  );
};

export default { treeValueCountRec, treeValueCount };
