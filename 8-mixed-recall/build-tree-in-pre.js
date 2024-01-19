// BUILD TREE IN PRE
// -----------------------------------------------------------------
// Write a function, buildTreeInPre, that takes in an array of
// in-ordered values and an array of pre-ordered values for a
// binary tree. The function should build a binary tree that has
// the given in-order and pre-order traversal structure. The
// function should return the root of this tree.

// You can assume that the values of inorder and preorder are unique.

// buildTreeInPre(
//   [ 'z', 'y', 'x' ],
//   [ 'y', 'z', 'x' ]
// );

//       y
//    /    \
//   z      x

// Approach is similar to build in post
// inOrder -> left, self, right
// preOrder -> self, left, right

// Recursive approach with array copies:
// const buildTreeInPre = (inOrder, preOrder) => {
//   if (inOrder.length === 0) return null;

//   const value = preOrder[0];
//   const root = new Node(value);

//   const mid = inOrder.indexOf(value);
//   const leftIn = inOrder.slice(0, mid);
//   const rightIn = inOrder.slice(mid + 1);

//   const leftPre = preOrder.slice(1, leftIn.length + 1);
//   const rightPre = preOrder.slice(leftIn.length + 1);

//   root.left = buildTreeInPre(leftIn, leftPre);
//   root.right = buildTreeInPre(rightIn, rightPre);

//   return root;
// };

// n = length of array
// Time: O(n^2)
// Space: O(n^2)

// Recursive in-place optimized approach:
const buildTreeInPre = (
  inOrder,
  preOrder,
  inOrderStart = 0,
  inOrderEnd = inOrder.length - 1,
  preOrderStart = 0,
  preOrderEnd = preOrder.length - 1
) => {
  if (inOrderEnd < inOrderStart) return null;

  const value = preOrder[preOrderStart];
  const root = new Node(value);

  const mid = inOrder.indexOf(value);
  const leftSize = mid - inOrderStart;

  root.left = buildTreeInPre(
    inOrder,
    preOrder,
    inOrderStart,
    mid - 1,
    preOrderStart + 1,
    preOrderStart + leftSize
  );

  root.right = buildTreeInPre(
    inOrder,
    preOrder,
    mid + 1,
    inOrderEnd,
    preOrderStart + leftSize + 1,
    preOrderEnd
  );

  return root;
};

// n = length of array
// Time: O(n)
// Space: O(n)

export default { buildTreeInPre };
