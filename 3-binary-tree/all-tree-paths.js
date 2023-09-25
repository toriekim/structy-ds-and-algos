/*
ALL TREE PATHS
------------------------------------------------------------------
Write a function, allTreePaths, that takes in the root of a binary
tree. The function should return a 2-Dimensional array where each 
subarray represents a root-to-leaf path in the tree.

The order within an individual path must start at the root and end 
at the leaf, but the relative order among paths in the outer array 
does not matter.

You may assume that the input tree is non-empty.

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

allTreePaths(a); // ->
// [ 
//   [ 'a', 'b', 'd' ], 
//   [ 'a', 'b', 'e' ], 
//   [ 'a', 'c', 'f' ] 
// ] 
*/

// Recursive
// n = number of nodes
// Time: ~O(n)
// Space: ~O(n)
const allTreePaths = (root) => {
  // base case: if root is null, we're at end of path
  if (root === null) return [];
  // base case: if root does not have children,
  // we're at end & can return the root value as viable path
  if (root.left === null && root.right === null) return [[root.val]];

  // create array to hold all our possible paths
  let paths = [];
  // recursive call to find possible paths to the left of root
  const leftPaths = allTreePaths(root.left);
  // loop through left paths to add root to start of path
  for (let path of leftPaths) {
    // push into final paths array
    paths.push([root.val, ...path]);
  }

  // recursive call to find possible paths to the right of root
  const rightPaths = allTreePaths(root.right);
  // loop through right paths to add root to start of path
  for (let path of rightPaths) {
    // push into final paths array
    paths.push([root.val, ...path]);
  }

  // return paths array
  return paths;
};

export default { allTreePaths };
