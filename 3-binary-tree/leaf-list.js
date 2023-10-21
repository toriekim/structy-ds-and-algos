/*
LEAF LIST
------------------------------------------------------------------
Write a function, leafList, that takes in the root of a binary 
tree and returns an array containing the values of all leaf nodes 
in left-to-right order.

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

leafList(a); // -> [ 'd', 'e', 'f' ] 
*/

// Iterative
// n = number of nodes
// Time Complexity: O(n)
// Space Complexity: O(n)
const leafList = (root) => {
  if (root === null) return [];

  const leaves = [];
  const stack = [root];

  while (stack.length) {
    const current = stack.pop();
    if (!current.left && !current.right) leaves.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return leaves;
};

// Recursive
// n = number of nodes
// Time Complexity: O(n)
// Space Complexity: O(n)
const leafListRec = (root) => {
  const leaves = [];
  getLeaves(root, leaves);
  return leaves;
};

const getLeaves = (root, leaves) => {
  if (root === null) return;
  if (!current.left && !current.right) leaves.push(current.val);

  getLeaves(root.right, leaves);
  getLeaves(root.left, leaves);
};

export default { leafList, leafListRec, getLeaves };
