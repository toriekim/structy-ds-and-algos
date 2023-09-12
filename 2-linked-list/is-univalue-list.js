/*
Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

Example: 
const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

isUnivalueList(a); // true
*/

// Iterative
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(1)
const isUnivalueList = (head) => {
  const val = head.val;
  let current = head.next;

  while (current !== null) {
    if (current.val !== val) return false;
    current = current.next;
  }

  return true;
};

// Recursive
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(n) -> n recursive calls on stack
const isUnivalueListRec = (head, prevVal = null) => {
  if (head === null) return true;
  if (prevVal === null || prevVal === head.val) {
    return isUnivalueListRec(head.next, head.val);
  } else return false;
};

export default { isUnivalueList, isUnivalueListRec };
