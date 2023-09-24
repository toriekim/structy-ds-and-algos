/*
DEPTH FIRST VALUES

Write a function, depthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in 
depth-first order.

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

depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
*/

// Iterative
// n = number of nodes
// Time Complexity: O(n)
// Space Complexity: O(n)
const depthFirstValues = (root) => {
  // if there is no root, return empty array
  if (root === null) return [];
  // create stack with root node
  let stack = [root];
  // create values result array to hold all node values
  let values = [];

  while (stack.length > 0) {
    const current = stack.pop();
    values.push(current.val);

    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
  }

  return values;
};

// Recursive
// n = number of nodes
// Time Complexity: O(n)
// Space Complexity: O(n)
const depthFirstValuesRec = (root) => {
  if (root === null) return [];

  const leftValues = depthFirstValuesRec(root.left);
  const rightValues = depthFirstValuesRec(root.right);

  return [root.val, ...leftValues, ...rightValues];
};

export default { depthFirstValues, depthFirstValuesRec };
