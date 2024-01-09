// LEFTY NODES
// -----------------------------------------------------------------
// Write a function, leftyNodes, that takes in the root of a binary
// tree. The function should return an array containing the left-most
// value on every level of the tree. The array must be ordered in a
// top-down fashion where the root is the first element.

// Note that the left-most node on a level may not necessarily be
// a left child.

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');
// const h = new Node('h');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// e.right = h;

//      a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h

// leftyNodes(a); // [ 'a', 'b', 'd', 'g' ]

// First passing solution:
// const leftyNodes = (root) => {
//   const leftValues = traverse(root, 0)

//   return leftValues ? leftValues : []
// };

// const traverse = (root, lvl = 0, values = []) => {
//   if (root === null) return null

//   // if there is no value stored for this level yet
//   if (!values[lvl]) values.push(root.val)

//   traverse(root.left, lvl + 1, values)
//   traverse(root.right, lvl + 1, values)

//   return values
// }

// Using closure if we don't want to expose traverse function globally:
const leftyNodes = (root) => {
  const values = [];

  const traverse = (node, lvl) => {
    if (node === null) return;

    // If there is no value stored for this level yet, push into values array
    if (!values[lvl]) values.push(node.val);

    // Want to traverse left side first to get left-most value
    traverse(node.left, lvl + 1);
    traverse(node.right, lvl + 1);
  };

  traverse(root, 0);
  return values;
};

export default { leftyNodes };
