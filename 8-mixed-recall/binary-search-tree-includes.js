// BINARY SEARCH TREE INCLUDES
// -----------------------------------------------------------------
// Write a function, binarySearchTreeIncludes, that takes in the
// root of a binary search tree containing numbers and a target
// value. The function should return a boolean indicating whether
// or not the target is found within the tree.

// A Binary Search Tree is a binary tree where all values within a
// node's left subtree are smaller than the node's value and all
// values in a node's right subtree are greater than or equal to
// the node's value.

// Your solution should have a best case runtime of O(log(n)).

// tree a
// const a = new Node(12);
// const b = new Node(5);
// const c = new Node(18);
// const d = new Node(3);
// const e = new Node(9);
// const f = new Node(19);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      12
//    /   \
//   5     18
//  / \     \
// 3   9     19
// binarySearchTreeIncludes(a, 9); // -> true

// Iterative appraoch:
const binarySearchTreeIncludes = (root, target) => {
  // Initialize current pointer at root
  let current = root;

  // While current is not null, traverse tree
  while (current !== null) {
    // If current node val is equal to target, return true
    if (current.val === target) return true;
    // Else if the target is less than current node val, go left
    else if (target < current.val) {
      current = current.left;
    } else {
      // Otherwise, target is greater than current, go right
      current = current.right;
    }
  }
  // Searched whole tree, target not found, return false
  return false;
};

// Recursive approach:
const BSTIncludesRec = (root, target) => {
  // Base case: If root is null, done traversing through tree without finding target
  if (root === null) return false;

  // Base case: If current node val is target, return true
  if (root.val === target) return true;

  // If current node val is greater than target...
  if (target < root.val) {
    // Search left branch for target
    return BSTIncludesRec(root.left, target);
  } else {
    // Otherwise, target is greater than current val, so search right branch
    return BSTIncludesRec(root.right, target);
  }
};

// Time complexity:
// n = number of nodes

// -- Worst Case --
// Time: O(n)
// Space: O(n)

// -- Best Case (balanced-tree) --
// Time: O(log(n))
// Space: O(log(n))

export default { binarySearchTreeIncludes, BSTIncludesRec };
