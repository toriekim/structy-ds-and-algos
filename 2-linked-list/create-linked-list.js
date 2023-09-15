import { Node } from './index';

/*
Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.

Example:
createLinkedList(["h", "e", "y"]);
// h -> e -> y
*/

// Iterative
// Time Complexity: O(n) -> n = length of values array
// Space Complexity: O(n)
const createLinkedList = (values) => {
  // create dummy head to start list
  let head = new Node(null);
  // initialize pointer to head
  let current = head;
  // iterate through values array to create new nodes
  for (let value of values) {
    // create new node as current's next
    current.next = new Node(value);
    // then move our pointer to the next node
    current = current.next;
  }
  // return dummy head's next node as head
  return head.next;
};

// Recursive
// Time Complexity: O(n) -> n = length of values array
// Space Complexity: O(n)

// add i to keep track of current position in array with each call
const createLinkedListRec = (values, i = 0) => {
  // base case: if i equals the length of values array, there are no more values to add to the list, so return null
  if (i === values.length) return null;
  // otherwise, create a new node with the value at our current position in the array
  let head = new Node(values[i]);
  // set the current node's next to the next value in the array
  head.next = createLinkedListRec(values, i + 1);
  // return the current node
  return head;
};

export default { createLinkedList, createLinkedListRec };
