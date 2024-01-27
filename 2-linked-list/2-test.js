import { expect } from 'chai';
import * as LinkedList from './index.js';
const { Node } = LinkedList;

describe('2-Linked-Lists', () => {
  describe('linked-list-values', () => {
    const { linkedListValues, linkedListValuesRec } = LinkedList;

    it(`returns an array containing all node values in liked list`, () => {
      const a = new Node('a');
      const b = new Node('b');
      const c = new Node('c');
      const d = new Node('d');
      a.next = b;
      b.next = c;
      c.next = d;
      // a -> b -> c -> d

      expect(linkedListValues(a)).to.deep.equal(['a', 'b', 'c', 'd']);
    });

    it(`handles linked list with 2 nodes`, () => {
      const x = new Node('x');
      const y = new Node('y');
      x.next = y;
      // x -> y
      expect(linkedListValues(x)).to.deep.equal(['x', 'y']);
    });

    it(`handles linked list with 1 node`, () => {
      const q = new Node('q');
      // q
      expect(linkedListValues(q)).to.deep.equal(['q']);
    });

    it(`returns empty array when list is empty`, () => {
      expect(linkedListValues(null)).to.be.an('array').that.is.empty;
    });
  });

  describe(`sum-list`, () => {
    const { sumList, sumListRec } = LinkedList;

    it(`returns the total sum of all node values in linked list`, () => {
      const a = new Node(2);
      const b = new Node(8);
      const c = new Node(3);
      const d = new Node(-1);
      const e = new Node(7);
      a.next = b;
      b.next = c;
      c.next = d;
      d.next = e;
      // 2 -> 8 -> 3 -> -1 -> 7

      expect(sumList(a)).to.equal(19);
    });

    it(`handles linked list with 2 nodes`, () => {
      const x = new Node(38);
      const y = new Node(4);
      x.next = y;
      // 38 -> 4
      expect(sumList(x)).to.equal(42);
    });

    it(`handles linked list with 1 node`, () => {
      const z = new Node(100);
      // 100
      expect(sumList(z)).to.equal(100);
    });

    it(`returns 0 when list is empty`, () => {
      expect(sumList(null)).to.equal(0);
    });
  });

  describe(`linked-list-find`, () => {
    const { linkedListFind, linkedListFindRec } = LinkedList;

    it(`returns true if linked list contains target`, () => {
      const a = new Node('a');
      const b = new Node('b');
      const c = new Node('c');
      const d = new Node('d');
      a.next = b;
      b.next = c;
      c.next = d;
      // a -> b -> c -> d

      expect(linkedListFind(a, 'c')).to.equal(true);
      expect(linkedListFind(a, 'd')).to.equal(true);
    });

    it(`returns false if linked list doesn't contain target`, () => {
      const a = new Node('a');
      const b = new Node('b');
      const c = new Node('c');
      const d = new Node('d');
      a.next = b;
      b.next = c;
      c.next = d;
      // a -> b -> c -> d

      expect(linkedListFind(a, 'q')).to.equal(false);
    });

    it(`handles nodes with string values`, () => {
      const node1 = new Node('jason');
      const node2 = new Node('leneli');
      node1.next = node2;
      // jason -> leneli

      expect(linkedListFind(node1, 'jason')).to.equal(true);
    });

    it('handles linked list with 1 node', () => {
      const node1 = new Node(42);
      // 42

      expect(linkedListFind(node1, 42)).to.equal(true);
      expect(linkedListFind(node1, 100)).to.equal(false);
    });
  });

  describe(`get-node-value`, () => {
    const { getNodeValue, getNodeValueRec } = LinkedList;

    it(`returns the value of the linked list at the specified index`, () => {
      const a = new Node('a');
      const b = new Node('b');
      const c = new Node('c');
      const d = new Node('d');
      a.next = b;
      b.next = c;
      c.next = d;
      // a -> b -> c -> d

      expect(getNodeValue(a, 2)).to.equal('c');
      expect(getNodeValue(a, 3)).to.equal('d');
    });

    it(`returns null if no node at index`, () => {
      const a = new Node('a');
      const b = new Node('b');
      const c = new Node('c');
      const d = new Node('d');
      a.next = b;
      b.next = c;
      c.next = d;
      // a -> b -> c -> d

      expect(getNodeValue(a, 7)).to.be.null;
    });

    it(`handles linked list nodes with string values`, () => {
      const node1 = new Node('banana');
      const node2 = new Node('mango');
      node1.next = node2;
      // banana -> mango

      expect(getNodeValue(node1, 0)).to.equal('banana');
      expect(getNodeValue(node1, 1)).to.equal('mango');
    });
  });

  describe(`reverse-list`, () => {
    const { reverseList, reverseListRec } = LinkedList;

    it(`returns the new head of the reversed linked list`, () => {
      const a = new Node('a');
      const b = new Node('b');
      const c = new Node('c');
      const d = new Node('d');
      const e = new Node('e');
      const f = new Node('f');

      a.next = b;
      b.next = c;
      c.next = d;
      d.next = e;
      e.next = f;
      // a -> b -> c -> d -> e -> f

      const reversedList = reverseList(a); // f -> e -> d -> c -> b -> a
      const reversedListValues = LinkedList.linkedListValues(reversedList);

      expect(reversedListValues).to.have.lengthOf(6);
      expect(reversedListValues).to.deep.equal(['f', 'e', 'd', 'c', 'b', 'a']);
    });

    it(`handles linked list with 2 nodes`, () => {
      const x = new Node('x');
      const y = new Node('y');
      x.next = y;
      // x -> y

      const reversedList = reverseList(x); // y -> x
      const reversedListValues = LinkedList.linkedListValues(reversedList);

      expect(reversedListValues).to.deep.equal(['y', 'x']);
      expect(reversedListValues).to.have.lengthOf(2);
    });

    it(`handles linked list with 1 node`, () => {
      const p = new Node('p'); // p

      const reversedList = reverseList(p);
      const reversedListValues = LinkedList.linkedListValues(reversedList);

      expect(reversedListValues).to.deep.equal(['p']);
      expect(reversedListValues).to.have.lengthOf(1);
    });
  });

  describe(`zipper-lists`, () => {
    const { zipperLists, zipperListsRec } = LinkedList;

    it(`returns a single linked list by alternating nodes from input lists`, () => {
      const a = new Node('a');
      const b = new Node('b');
      const c = new Node('c');
      a.next = b;
      b.next = c;
      // a -> b -> c

      const x = new Node('x');
      const y = new Node('y');
      const z = new Node('z');
      x.next = y;
      y.next = z;
      // x -> y -> z

      const zipperedList = zipperLists(a, x);
      // a -> x -> b -> y -> c -> z
      const zipperedListValues = LinkedList.linkedListValues(zipperedList);

      expect(zipperedListValues).to.have.lengthOf(6);
      expect(zipperedListValues).to.have.ordered.members([
        'a',
        'x',
        'b',
        'y',
        'c',
        'z',
      ]);
    });

    it(`handles different lengths of linked lists`, () => {
      const a = new Node('a');
      const b = new Node('b');
      const c = new Node('c');
      const d = new Node('d');
      const e = new Node('e');
      const f = new Node('f');
      a.next = b;
      b.next = c;
      c.next = d;
      d.next = e;
      e.next = f;
      // a -> b -> c -> d -> e -> f

      const x = new Node('x');
      const y = new Node('y');
      const z = new Node('z');
      x.next = y;
      y.next = z;
      // x -> y -> z

      const zipperedList = zipperLists(a, x);
      // a -> x -> b -> y -> c -> z -> d -> e -> f
      const zipperedListValues = LinkedList.linkedListValues(zipperedList);

      expect(zipperedListValues).to.have.lengthOf(9);
      expect(zipperedListValues).to.have.ordered.members([
        'a',
        'x',
        'b',
        'y',
        'c',
        'z',
        'd',
        'e',
        'f',
      ]);
    });

    it(`handles different node value types`, () => {
      const s = new Node('s');
      const t = new Node('t');
      s.next = t;
      // s -> t

      const one = new Node(1);
      const two = new Node(2);
      const three = new Node(3);
      const four = new Node(4);
      one.next = two;
      two.next = three;
      three.next = four;
      // 1 -> 2 -> 3 -> 4

      const zipperedList = zipperLists(s, one);
      // s -> 1 -> t -> 2 -> 3 -> 4
      const zipperedListValues = LinkedList.linkedListValues(zipperedList);

      expect(zipperedListValues).to.have.lengthOf(6);
      expect(zipperedListValues).to.have.ordered.members([
        's',
        1,
        't',
        2,
        3,
        4,
      ]);
    });

    it(`handles first input list with 1 node`, () => {
      const w = new Node('w'); // w

      const one = new Node(1);
      const two = new Node(2);
      const three = new Node(3);
      one.next = two;
      two.next = three;
      // 1 -> 2 -> 3

      const zipperedList = zipperLists(w, one);
      // w -> 1 -> 2 -> 3
      const zipperedValues = LinkedList.linkedListValues(zipperedList);

      expect(zipperedValues).to.have.lengthOf(4);
      expect(zipperedValues).to.have.ordered.members(['w', 1, 2, 3]);
    });

    it(`handles second input list with 1 node`, () => {
      const w = new Node('w'); // w

      const one = new Node(1);
      const two = new Node(2);
      const three = new Node(3);
      one.next = two;
      two.next = three;
      // 1 -> 2 -> 3

      const zipperedList = zipperLists(one, w);
      // 1 -> w -> 2 -> 3
      const zipperedValues = LinkedList.linkedListValues(zipperedList);

      expect(zipperedValues).to.have.lengthOf(4);
      expect(zipperedValues).to.have.ordered.members([1, 'w', 2, 3]);
    });
  });

  describe(`merge-lists`, () => {
    const { mergeLists, mergeListsRec } = LinkedList;

    it(`returns the head of the sorted merged linked list`, () => {
      const a = new Node(5);
      const b = new Node(7);
      const c = new Node(10);
      const d = new Node(12);
      const e = new Node(20);
      const f = new Node(28);
      a.next = b;
      b.next = c;
      c.next = d;
      d.next = e;
      e.next = f;
      // 5 -> 7 -> 10 -> 12 -> 20 -> 28

      const q = new Node(6);
      const r = new Node(8);
      const s = new Node(9);
      const t = new Node(25);
      q.next = r;
      r.next = s;
      s.next = t;
      // 6 -> 8 -> 9 -> 25

      const mergedList = mergeLists(a, q);
      // 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28
      const mergedValues = LinkedList.linkedListValues(mergedList);

      expect(mergedValues).to.have.lengthOf(10);
      expect(mergedValues).to.have.ordered.members([
        5, 6, 7, 8, 9, 10, 12, 20, 25, 28,
      ]);
    });

    it(`handles case when both input lists have a node with same value`, () => {
      const a = new Node(5);
      const b = new Node(7);
      const c = new Node(10);
      const d = new Node(12);
      const e = new Node(20);
      const f = new Node(28);
      a.next = b;
      b.next = c;
      c.next = d;
      d.next = e;
      e.next = f;
      // 5 -> 7 -> 10 -> 12 -> 20 -> 28

      const q = new Node(1);
      const r = new Node(8);
      const s = new Node(9);
      const t = new Node(10);
      q.next = r;
      r.next = s;
      s.next = t;
      // 1 -> 8 -> 9 -> 10

      const mergedList = mergeLists(a, q);
      // 1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28
      const mergedValues = LinkedList.linkedListValues(mergedList);

      expect(mergedValues).to.have.lengthOf(10);
      expect(mergedValues).to.have.ordered.members([
        1, 5, 7, 8, 9, 10, 10, 12, 20, 28,
      ]);
    });

    it(`handles case when one input list has 1 node`, () => {
      const h = new Node(30); // 30

      const p = new Node(15);
      const q = new Node(67);
      p.next = q;
      // 15 -> 67

      const mergedList = mergeLists(h, p); // 15 -> 30 -> 67
      const mergedValues = LinkedList.linkedListValues(mergedList);

      expect(mergedValues).to.have.lengthOf(3);
      expect(mergedValues).to.have.ordered.members([15, 30, 67]);
    });
  });

  describe(`is-univalue-list`, () => {
    const { isUnivalueList, isUnivalueListRec } = LinkedList;

    it(`returns true if linked list contains exactly one unique value`, () => {
      const a = new Node(7);
      const b = new Node(7);
      const c = new Node(7);
      a.next = b;
      b.next = c;
      // 7 -> 7 -> 7

      const u = new Node(2);
      const v = new Node(2);
      const w = new Node(2);
      const x = new Node(2);
      const y = new Node(2);
      u.next = v;
      v.next = w;
      w.next = x;
      x.next = y;
      // 2 -> 2 -> 2 -> 2 -> 2

      expect(isUnivalueList(a)).to.be.true;
      expect(isUnivalueList(u)).to.be.true;
    });

    it(`returns flase if linked list doesn't contain exactly one unique value`, () => {
      const a = new Node(7);
      const b = new Node(7);
      const c = new Node(4);
      a.next = b;
      b.next = c;
      // 7 -> 7 -> 4

      const u = new Node(2);
      const v = new Node(2);
      const w = new Node(3);
      const x = new Node(3);
      const y = new Node(2);
      u.next = v;
      v.next = w;
      w.next = x;
      x.next = y;
      // 2 -> 2 -> 3 -> 3 -> 2

      expect(isUnivalueList(a)).to.be.false;
      expect(isUnivalueList(u)).to.be.false;
    });

    it(`returns true if linked list has 1 node`, () => {
      const z = new Node('z'); // z

      expect(isUnivalueList(z)).to.be.true;
    });

    it(`handles list with 1 different node value that isn't a head or tail node`, () => {
      const u = new Node(2);
      const v = new Node(1);
      const w = new Node(2);
      const x = new Node(2);
      const y = new Node(2);
      u.next = v;
      v.next = w;
      w.next = x;
      x.next = y;
      // 2 -> 1 -> 2 -> 2 -> 2

      expect(isUnivalueList(u)).to.be.false; // false
    });
  });

  describe(`longest-streak`, () => {
    const { longestStreak, longestStreakRec } = LinkedList;

    it(`returns the length of the longest consecutive streak of the same value`, () => {
      const a = new Node(5);
      const b = new Node(5);
      const c = new Node(7);
      const d = new Node(7);
      const e = new Node(7);
      const f = new Node(6);
      a.next = b;
      b.next = c;
      c.next = d;
      d.next = e;
      e.next = f;
      // 5 -> 5 -> 7 -> 7 -> 7 -> 6

      expect(longestStreak(a)).to.equal(3);
    });

    it(`handles when streak starts from head node`, () => {
      const a = new Node(3);
      const b = new Node(3);
      const c = new Node(3);
      const d = new Node(3);
      const e = new Node(9);
      const f = new Node(9);
      a.next = b;
      b.next = c;
      c.next = d;
      d.next = e;
      e.next = f;
      // 3 -> 3 -> 3 -> 3 -> 9 -> 9

      expect(longestStreak(a)).to.equal(4);
    });

    it(`handles a list with a single middle node with different value`, () => {
      const a = new Node(9);
      const b = new Node(9);
      const c = new Node(1);
      const d = new Node(9);
      const e = new Node(9);
      const f = new Node(9);
      a.next = b;
      b.next = c;
      c.next = d;
      d.next = e;
      e.next = f;
      // 9 -> 9 -> 1 -> 9 -> 9 -> 9

      expect(longestStreak(a)).to.equal(3);
    });

    it(`handles list with 2 nodes`, () => {
      const a = new Node(5);
      const b = new Node(5);
      a.next = b;
      // 5 -> 5

      expect(longestStreak(a)).to.equal(2);
    });

    it(`handles list with 1 node`, () => {
      const a = new Node(4); // 4
      expect(longestStreak(a)).to.equal(1);
    });

    it(`returns 0 when input list is null`, () => {
      expect(longestStreak(null)).to.equal(0);
    });
  });

  describe(`remove-node`, () => {
    const { removeNode, removeNodeRec, linkedListValues } = LinkedList;

    it(`returns head of resulting linked list with node containing target value removed`, () => {
      const a = new Node('a');
      const b = new Node('b');
      const c = new Node('c');
      const d = new Node('d');
      const e = new Node('e');
      const f = new Node('f');
      a.next = b;
      b.next = c;
      c.next = d;
      d.next = e;
      e.next = f;
      // a -> b -> c -> d -> e -> f

      const removedList = removeNode(a, 'c');
      // a -> b -> d -> e -> f
      const removedValues = linkedListValues(removedList);

      expect(removedValues).to.have.lengthOf(5);
      expect(removedValues)
        .to.have.ordered.members(['a', 'b', 'd', 'e', 'f'])
        .but.not.have.members(['c']);
    });

    it(`handles removal of tail node`, () => {
      const x = new Node('x');
      const y = new Node('y');
      const z = new Node('z');
      x.next = y;
      y.next = z;
      // x -> y -> z

      const removedList = removeNode(x, 'z'); // x -> y
      const removedValues = linkedListValues(removedList);

      expect(removedValues).to.have.lengthOf(2);
      expect(removedValues)
        .to.have.ordered.members(['x', 'y'])
        .but.not.have.members(['z']);
    });

    it(`handles removal of head node`, () => {
      const q = new Node('q');
      const r = new Node('r');
      const s = new Node('s');
      q.next = r;
      r.next = s;
      // q -> r -> s

      const removedList = removeNode(q, 'q'); // r -> s
      const removedValues = linkedListValues(removedList);

      expect(removedValues).to.have.lengthOf(2);
      expect(removedValues)
        .to.have.ordered.members(['r', 's'])
        .but.not.have.members(['q']);
    });

    it(`handles removal of only the first node with target value when there are multiple`, () => {
      const node1 = new Node('h');
      const node2 = new Node('i');
      const node3 = new Node('j');
      const node4 = new Node('i');
      node1.next = node2;
      node2.next = node3;
      node3.next = node4;
      // h -> i -> j -> i

      const removedList = removeNode(node1, 'i'); // h -> j -> i
      const removedValues = linkedListValues(removedList);

      expect(removedValues).to.have.lengthOf(3);
      expect(removedValues).to.have.ordered.members(['h', 'j', 'i']);
    });

    it(`handles list with 1 node`, () => {
      const t = new Node('t'); // t
      expect(removeNode(t, 't')).to.be.null;
    });
  });

  describe(`insert-node`, () => {
    const { insertNode, insertNodeRec, linkedListValues } = LinkedList;

    it(`returns head of resulting linked list with inserted node`, () => {
      const a = new Node('a');
      const b = new Node('b');
      const c = new Node('c');
      const d = new Node('d');
      a.next = b;
      b.next = c;
      c.next = d;
      // a -> b -> c -> d

      const insertedList = insertNode(a, 'x', 2);
      // a -> b -> x -> c -> d
      const insertedValues = linkedListValues(insertedList);

      expect(insertedList).to.deep.equal({
        val: 'a',
        next: {
          val: 'b',
          next: {
            val: 'x',
            next: { val: 'c', next: { val: 'd', next: null } },
          },
        },
      });
      expect(insertedValues)
        .to.have.lengthOf(5)
        .and.to.have.ordered.members(['a', 'b', 'x', 'c', 'd']);
      expect(insertedValues[2]).to.equal('x');
    });

    it(`handles insertion at second-to-last position`, () => {
      const a = new Node('a');
      const b = new Node('b');
      const c = new Node('c');
      const d = new Node('d');
      a.next = b;
      b.next = c;
      c.next = d;
      // a -> b -> c -> d

      const insertedList = insertNode(a, 'v', 3);
      // a -> b -> c -> v -> d
      const insertedValues = linkedListValues(insertedList);

      expect(insertedList).to.deep.equal({
        val: 'a',
        next: {
          val: 'b',
          next: {
            val: 'c',
            next: { val: 'v', next: { val: 'd', next: null } },
          },
        },
      });
      expect(insertedValues)
        .to.have.lengthOf(5)
        .and.to.have.ordered.members(['a', 'b', 'c', 'v', 'd']);
      expect(insertedValues[3]).to.equal('v');
    });

    it(`handles insertion at last index (new tail)`, () => {
      const a = new Node('a');
      const b = new Node('b');
      const c = new Node('c');
      const d = new Node('d');
      a.next = b;
      b.next = c;
      c.next = d;
      // a -> b -> c -> d

      const insertedList = insertNode(a, 'm', 4);
      // a -> b -> c -> d -> m
      const insertedValues = linkedListValues(insertedList);

      expect(insertedList).to.deep.equal({
        val: 'a',
        next: {
          val: 'b',
          next: {
            val: 'c',
            next: { val: 'd', next: { val: 'm', next: null } },
          },
        },
      });
      expect(insertedValues)
        .to.have.lengthOf(5)
        .and.to.have.ordered.members(['a', 'b', 'c', 'd', 'm']);
      expect(insertedValues[4]).to.equal('m');
    });

    it(`handles insertion at 0th index (new head)`, () => {
      const a = new Node('a');
      const b = new Node('b');
      a.next = b;
      // a -> b

      const insertedList = insertNode(a, 'z', 0);
      // z -> a -> b
      const insertedValues = linkedListValues(insertedList);

      expect(insertedList).to.deep.equal({
        val: 'z',
        next: { val: 'a', next: { val: 'b', next: null } },
      });
      expect(insertedValues)
        .to.have.lengthOf(3)
        .and.to.have.ordered.members(['z', 'a', 'b']);
      expect(insertedValues[0]).to.equal('z');
    });
  });

  describe(`create-linked-list`, () => {
    const { createLinkedList, createLinkedListRec, linkedListValues } =
      LinkedList;

    it(`handles string values`, () => {
      const createdList = createLinkedList(['h', 'e', 'y']);
      // h -> e -> y

      expect(createdList).to.deep.equal({
        val: 'h',
        next: { val: 'e', next: { val: 'y', next: null } },
      });
    });

    it(`handles number values`, () => {
      const createdList = createLinkedList([1, 7, 1, 8]);
      // 1 -> 7 -> 1 -> 8

      expect(createdList).to.deep.equal({
        val: 1,
        next: { val: 7, next: { val: 1, next: { val: 8, next: null } } },
      });
    });

    it(`handles creating list with 1 node`, () => {
      expect(createLinkedList(['a'])).to.deep.equal({
        val: 'a',
        next: null,
      });
    });

    it(`returns null when input array is empty`, () => {
      expect(createLinkedList([])).to.be.null;
    });
  });

  describe(`add-lists`, () => {
    const { addLists, addListsRec } = LinkedList;

    it(`returns the head of a new linked list representing the sum of the input lists with digits reversed`, () => {
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

      const result = addLists(a1, b1); // 5 -> 7 -> 9
      expect(result).to.deep.equal({
        val: 5,
        next: { val: 7, next: { val: 9, next: null } },
      });
    });

    it(`handles different list lengths`, () => {
      //  7541
      // +  32
      // -----
      //  7573

      const a1 = new Node(1);
      const a2 = new Node(4);
      const a3 = new Node(5);
      const a4 = new Node(7);
      a1.next = a2;
      a2.next = a3;
      a3.next = a4;
      // 1 -> 4 -> 5 -> 7

      const b1 = new Node(2);
      const b2 = new Node(3);
      b1.next = b2;
      // 2 -> 3

      const result = addLists(a1, b1); // 3 -> 7 -> 5 -> 7
      expect(result).to.deep.equal({
        val: 3,
        next: { val: 7, next: { val: 5, next: { val: 7, next: null } } },
      });
    });

    it(`handles carryover values`, () => {
      //   39
      // + 47
      // ----
      //   86
      const a1 = new Node(9);
      const a2 = new Node(3);
      a1.next = a2;
      // 9 -> 3

      const b1 = new Node(7);
      const b2 = new Node(4);
      b1.next = b2;
      // 7 -> 4

      const result = addLists(a1, b1); // 6 -> 8
      expect(result).to.deep.equal({
        val: 6,
        next: { val: 8, next: null },
      });
    });

    it(`handles multiple carryover values`, () => {
      //   89
      // + 47
      // ----
      //  136

      const a1 = new Node(9);
      const a2 = new Node(8);
      a1.next = a2;
      // 9 -> 8

      const b1 = new Node(7);
      const b2 = new Node(4);
      b1.next = b2;
      // 7 -> 4

      const result = addLists(a1, b1); // 6 -> 3 -> 1
      expect(result).to.deep.equal({
        val: 6,
        next: { val: 3, next: { val: 1, next: null } },
      });
    });

    it(`handles carryovers with zeros (adding to 10)`, () => {
      //   999
      //  +  6
      //  ----
      //  1005

      const a1 = new Node(9);
      const a2 = new Node(9);
      const a3 = new Node(9);
      a1.next = a2;
      a2.next = a3;
      // 9 -> 9 -> 9

      const b1 = new Node(6);
      // 6

      const result = addLists(a1, b1); // 5 -> 0 -> 0 -> 1
      expect(result).to.deep.equal({
        val: 5,
        next: { val: 0, next: { val: 0, next: { val: 1, next: null } } },
      });
    });
  });
});
