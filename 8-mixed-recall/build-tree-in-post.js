// BUILD TREE IN POST
// -----------------------------------------------------------------
// Write a function, buildTreeInPost, that takes in an array of
// in-ordered values and an array of post-ordered values for a
// binary tree. The function should build a binary tree that has
// the given in-order and post-order traversal structure. The
// function should return the root of this tree.

// You can assume that the values of inorder and postorder are unique.

// buildTreeInPost(
//   [ 'y', 'x', 'z' ],
//   [ 'y', 'z', 'x' ]
// );

//       x
//    /    \
//   y      z

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// inOrder -> left, self, right
// root is middle element in balanced tree
// postOrder -> left, right, self
// root is last element always

const buildTreeInPost = (inOrder, postOrder) => {
  // Base case: If inOrder array is empty, we're done building
  if (inOrder.length === 0) return null;

  // The root is the last element in postOrder array
  const value = postOrder[postOrder.length - 1];
  const root = new Node(value);

  // Find index of root value in inOrder array, which is the middle
  const mid = inOrder.indexOf(value);
  const leftIn = inOrder.slice(0, mid);
  const rightIn = inOrder.slice(mid + 1);

  // Using the length of leftIn array, find corresponding postOrder left & right branches
  const leftPost = postOrder.slice(0, leftIn.length);
  const rightPost = postOrder.slice(leftIn.length, -1);

  // Assign left and right node values to current root
  root.left = buildTreeInPost(leftIn, leftPost);
  root.right = buildTreeInPost(rightIn, rightPost);

  return root;
};

// n = length of array
// Time: O(n^2)
// Space: O(n^2)

export default { buildTreeInPost };
