export { linkedListValues, linkedListValuesRec } from './linked-list-values.js';
export { sumList, sumListRec } from './sum-list.js';
export { linkedListFind, linkedListFindRec } from './linked-list-find.js';
export { getNodeValue, getNodeValueRec } from './get-node-value.js';
export { reverseList, reverseListRec } from './reverse-list.js';
export { zipperLists, zipperListsRec } from './zipper-lists.js';
export { mergeLists, mergeListsRec } from './merge-lists.js';
export { isUnivalueList, isUnivalueListRec } from './is-univalue-list.js';
export { longestStreak, longestStreakRec } from './longest-streak.js';
export { removeNode, removeNodeRec } from './remove-node.js';
export { insertNode, insertNodeRec } from './insert-node.js';
export { createLinkedList, createLinkedListRec } from './create-linked-list.js';
export { addLists, addListsRec } from './add-lists.js';

export class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Iterative
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity:

// Recursive
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(n) -> n recursive calls on stack
