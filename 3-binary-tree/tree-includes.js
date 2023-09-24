/*
TREE INCLUDES

Write a function, treeIncludes, that takes in the root of a binary tree and 
a target value. The function should return a boolean indicating whether or 
not the value is contained in the tree.

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

treeIncludes(a, "e"); // -> true
*/

// Iterative
// n = number of nodes
// Time Complexity: O(n)
// Space Complexity: O(n)
const treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;

  let stack = [root];
  while (stack.length) {
    const current = stack.pop();
    if (current.val === target) return true;
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return false;
};

// Recursive
// n = number of nodes
// Time Complexity: O(n)
// Space Complexity: O(n)
const treeIncludesRec = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return (
    treeIncludesRec(root.left, target) || treeIncludesRec(root.right, target)
  );
};

export default { treeIncludes, treeIncludesRec };
