import { Node } from './index.js';

/*
Write a function, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.

You must do this by traversing through the linked lists once.

Say we wanted to compute 621 + 354 normally. The sum is 975:
  621
+ 354
-----
  975

Then, the reversed linked list format of this problem would appear as:
  1 -> 2 -> 6
+ 4 -> 5 -> 3
--------------
  5 -> 7 -> 9

Example:
//   621
// + 354
// -----
//   975

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
// 1 -> 2 -> 6

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;
// 4 -> 5 -> 3

addLists(a1, b1);
// 5 -> 7 -> 9
*/

// Iterative
// n = length of list 1
// m = length of list 2
// Time Complexity: O(max(n, m))
// Space Complexity: O(max(n, m))
const addLists = (head1, head2) => {
  // create dummy head
  let dummy = new Node(null);
  let tail = dummy;
  // create pointers to both lists
  let current1 = head1;
  let current2 = head2;
  // create variable to hold carry over
  let carry = 0;

  // iterate through list while either lists have values or carry is 1
  while (current1 !== null || current2 !== null || carry !== 0) {
    // create variables to hold values to sum & sum value with carry
    const val1 = current1 === null ? 0 : current1.val; // ternary b/c current1 might be null
    const val2 = current2 === null ? 0 : current2.val; // ternary b/c current2 might be null
    const sum = val1 + val2 + carry; // add carry (0 or 1)

    carry = sum > 9 ? 1 : 0; // reassign carry depending on if sum is greater than 9
    const digit = sum % 10; // get the digit to create the new sum value node
    // create new node and move pointer
    tail.next = new Node(digit);
    tail = tail.next;

    // move pointers of lists if there are more nodes
    if (current1 !== null) current1 = current1.next;
    if (current2 !== null) current2 = current2.next;
  }

  return dummy.next;
};

// Recursive
// n = length of list 1
// m = length of list 2
// Time Complexity: O(max(n, m))
// Space Complexity: O(max(n, m))
const addListsRec = (head1, head2, carry = 0) => {
  if (head1 === null && head2 === null && carry === 0) return null;

  const val1 = head1 === null ? 0 : head1.val;
  const val2 = head2 === null ? 0 : head2.val;
  const sum = val1 + val2 + carry;
  carry = sum > 9 ? 1 : 0;
  const digit = sum % 10;
  const result = new Node(digit);

  const next1 = head1 ? head1.next : null;
  const next2 = head2 ? head2.next : null;

  result.next = addLists(next1, next2, carry);
  return result;
};

export { addLists, addListsRec };
