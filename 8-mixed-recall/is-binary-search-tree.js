// IS BINARY SEARCH TREE
// -----------------------------------------------------------------
// Write a function, isBinarySearchTree, that takes in the root of
// a binary tree. The function should return a boolean indicating
// whether or not the tree satisfies the binary search tree property.

// A Binary Search Tree is a binary tree where all values within a
// node's left subtree are smaller than the node's value and all
// values in a node's right subtree are greater than the node's value.

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

// isBinarySearchTree(a); // -> true

// Approach:
// Create array to hold node values
// DFS -> in-order traversal to process nodes left -> right
// Continue down the left of the tree until at bottom leftmost
// Process in-order: left, current, right
// After processing all nodes, loop through values to check it's in ascending order
// If not, return false

const isBinarySearchTree = (root) => {
  // Create array to hold tree node values
  const values = [];
  // DFS in-order traversal to process nodes left -> right
  inOrderTraversal(root, values);
  // Check and return if node values are in ascending order
  return isSorted(values);
};

const inOrderTraversal = (root, values) => {
  // Base case: If root is null, done traversing branch
  if (root === null) return;

  // Process all left nodes first, then current, and then all right nodes
  inOrderTraversal(root.left, values);
  values.push(root.val);
  inOrderTraversal(root.right, values);
};

const isSorted = (values) => {
  // Loop through array until second to last element
  for (let i = 0; i < values.length - 1; i++) {
    // Compare current and next values:
    const current = values[i];
    const next = values[i + 1];
    // If current is larger than next, not in ascending order
    if (current > next) return false;
  }
  // Done checking array, in ascending order, return true
  return true;
};

// Time complexity:
// n = number of nodes
// Time: O(n)
// Space: O(n)

export default { isBinarySearchTree, inOrderTraversal, isSorted };
