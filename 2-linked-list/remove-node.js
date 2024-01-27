/*
Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

Do this in-place.

You may assume that the input list is non-empty.

You may assume that the input list contains the target.

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

removeNode(a, "c");
// a -> b -> d -> e -> f
*/

// Iterative
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(1)
const removeNode = (head, targetVal) => {
  // if first node's val is target, return head's next
  if (head.val === targetVal) return head.next;
  // otherwise, node w/ targetVal is later in the LL
  // set up prev & current pointers
  let prev = null;
  let current = head;
  // iterate through list while current is not null
  while (current !== null) {
    // if current node's value is target,
    // set prev's next to current's next, removing current from LL
    if (current.val === targetVal) {
      prev.next = current.next;
      break;
    }
    // else, move pointers to next nodes
    prev = current;
    current = current.next;
  }
  return head;
};

// Recursive
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(n)
const removeNodeRec = (head, targetVal) => {
  // base case: if head is null, we're at the end of LL
  if (head === null) return null;
  // base case: if head node val is targetVal, return the next node, removing the current node
  if (head.val === targetVal) return head.next;
  // otherwise, continue to iterate through list
  head.next = removeNodeRec(head.next, targetVal);
  return head;
};

export { removeNode, removeNodeRec };
