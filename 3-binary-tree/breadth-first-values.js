/*
BREADTH FIRST VALUES

Write a function, breadthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in 
breadth-first order.

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

breadthFirstValues(a); 
//    -> ['a', 'b', 'c', 'd', 'e', 'f']
*/

// Iterative
// n = number of nodes
// Time Complexity: O(n)
// Space Complexity: O(n)
const breadthFirstValues = (root) => {
  if (root === null) return [];

  let queue = [root];
  let values = [];

  while (queue.length > 0) {
    const current = queue.shift();
    values.push(current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return values;
};

// Note: This solution should really be considered O(n^2) runtime because the
// JavaScript shift() methods runs in O(n). JavaScript does not have a native
// queue data structure that is maximally efficient.

export default { breadthFirstValues };
