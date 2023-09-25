/*
BOTTOM RIGHT VALUE

Write a function, bottomRightValue, that takes in the root of a binary tree. The function should return the right-most value in the bottom-most level of the tree.

You may assume that the input tree is non-empty.

Example:
const a = new Node(3);
const b = new Node(11);
const c = new Node(10);
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
//   11     10
//  / \      \
// 4   -2     1

bottomRightValue(a); // -> 1
*/

// Breadth First Iterative -> BFS will end with bottom right-most node (last node in BFS order)
// n = number of nodes
// Time Complexity: O(n)
// Space Complexity: O(n)
const bottomRightValue = (root) => {
  // implement queue with array
  let queue = [];
  // create pointer to traverse the tree
  let current = null;
  // iterate through tree while there are nodes in queue to be processed
  while (queue.length > 0) {
    // reassign current pointer to next node in queue & remove from queue
    current = queue.shift();
    // if current node has left or right nodes, add to queue
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  // we're done traversing through the tree & current is pointing to last node
  // return its value
  return current.val;
};

export default bottomRightValue;
