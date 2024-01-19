// POST ORDER
// -----------------------------------------------------------------
// Write a function, postOrder, that takes in the root of a binary
// tree. The function should return an array containing the
// post-ordered values of the tree.

// Post-order traversal is when nodes are recursively visited in
// the order: left child, right child, self.

// const x = new Node('x');
// const y = new Node('y');
// const z = new Node('z');

// x.left = y;
// x.right = z;

//       x
//    /    \
//   y      z

// postOrder(x) // -> ['y', 'z', 'x']

const postOrder = (root) => {
  // Create values array to hold tree node values
  const values = [];
  // Traverse tree in post-order: left child, right child, self
  postOrderTraversal(root, values);
  // Return values
  return values;
};

const postOrderTraversal = (root, values) => {
  // Base case: If current node is null, at end, return
  if (root === null) return;

  // Process in left, right, self order
  postOrderTraversal(root.left, values);
  postOrderTraversal(root.right, values);
  values.push(root.val);
};

export default { postOrder, postOrderTraversal };
