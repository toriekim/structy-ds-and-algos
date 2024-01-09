// LOWEST COMMON ANCESTOR
// -----------------------------------------------------------------
// Write a function, lowestCommonAncestor, that takes in the root of
// a binary tree and two values. The function should return the
// value of the lowest common ancestor of the two values in the tree.

// You may assume that the tree values are unique and the tree is
// non-empty.

// Note that a node may be considered an ancestor of itself.

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

// Approach:
// - Need to find paths to both target values -> tree traversal using DFS
// - Need to compare paths to find first common value in paths

// lowestCommonAncestor(a, 'd', 'h'); // b

// First passing attempt:
// const lowestCommonAncestor = (root, val1, val2) => {
//   const path1 = _lowestCommonAncestor(root, val1)
//   const path2 = _lowestCommonAncestor(root, val2)

//   let i = 0
//   while (i < path1.length) {
//     if (path2.includes(path1[i])) return path1[i]
//     else i++
//   }
// };

// const _lowestCommonAncestor = (root, target) => {
//   if (root === null) return null
//   if (root.val === target) return [root.val]

//   const left = _lowestCommonAncestor(root.left, target)
//   const right = _lowestCommonAncestor(root.right, target)

//   if (left) return [...left, root.val]
//   if (right) return [...right, root.val]
// };

// Optimized approach:
// Using Set (O(1) lookup) to avoid using .includes() in loop
// Pushing root.val in DFS instead of creating a new array
const lowestCommonAncestor = (root, val1, val2) => {
  const path1 = findPath(root, val1);
  const path2 = findPath(root, val2);
  const set2 = new Set(path2);

  for (let val of path1) {
    if (set2.has(val)) return val;
  }
};

const findPath = (root, targetVal) => {
  if (root === null) return null;
  if (root.val === targetVal) return [root.val];

  const leftPath = findPath(root.left, targetVal);
  if (leftPath) {
    leftPath.push(root.val);
    return leftPath;
  }

  const rightPath = findPath(root.right, targetVal);
  if (rightPath) {
    rightPath.push(root.val);
    return rightPath;
  }

  return null;
};

// n = number of nodes
// Time: O(n)
// Space: O(n) -> storing paths & creating Set

export default { lowestCommonAncestor };
