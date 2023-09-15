/*
Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

Do this in-place.

You may assume that the input list is non-empty and the index is not greater than the length of the input list.

Example: 
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'x', 2);
// a -> b -> x -> c -> d
*/

// Iterative
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(1)
const insertNode = (head, value, index) => {
  // if index is 0, insert node as new head of list
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  // otherwise, interate through LL with pointers
  let currentIdx = 0;
  let current = head;
  while (current !== null) {
    // insert node when currentIdx equals target index - 1 (b/c we want it to be current's next)
    if (currentIdx === index - 1) {
      const next = current.next;
      current.next = new Node(value);
      current.next.next = next;
    }
    // otherwise increment currentIdx and move pointer to next node
    currentIdx++;
    current = current.next;
  }
  return head;
};

// Recursive
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(n)
const insertNodeRec = (head, value, index) => {
  // base case: if index is 0, insert node as new head of list
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }

  // base case: if currentIdx is equal to target index - 1, insert node
  if (currentIdx === index - 1) {
    const next = head.next;
    head.next = new Node(value);
    head.next.next = next;
    return head;
  }

  // otherwise, keep iterating through list recursively
  insertNode(head.next, value, index, currentIdx + 1);

  return head;
};

export default { insertNode, insertNodeRec };
