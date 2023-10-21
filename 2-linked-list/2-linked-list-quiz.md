# 2. Linked List Quiz

#### What two properties are typically stored in the nodes of a singly linked list?

- `value` (the data being stored) & `next` (a reference to the next sequential node in the list)

#### What term is commonly used to describe the 'first node' of a linked list?

- Head

#### What term is commonly used to describe the 'last node' of a linked list?

- Tail

#### What is the 'dummy head' pattern for linked lists?

- The pattern is where we use a fake node to act as the `head` of the linked list.
- The dummy node is used to simplify edge cases such as inserting the first node into an 'empty' linked list.

#### What is the optimal complexity we can achieve for searching for a target value in a standard, singly linked list?

- **Iteratively**: O(n) time & O(1) space
- **Recursively**: Less optimal at O(n) time & O(n) space
- n = # of nodes in list

#### Why might the expression 'current.next.val' be unsafe?

- If current is the tail node, the expression throws an error, because `current.next` is `null` & `null` does not have a `val` property

# 2. Linked List Quiz

#### What term is commonly used to describe the "last node" of a linked list?

Tail

#### What two properties are typically stored in the nodes of a singly linked-list?

- "value": The data being stored in the node
- "next": A reference to the next sequential node in the list

#### What is the optimal complexity we can achieve for searching for a target value in a standard, singly linked list?

- O(n) time and O(1) space if we do it iteratively, where n is the number of nodes in the list
- The recursive solution would be less optimal at O(n) time and O(n) space

#### What is the "dummy head" pattern for linked lists?

- Where we use a fake node to act as the head of the linked list
- The dummy node is used to simplify edge cases such as inserting the first node into an "empty" linked list

#### What term is commonly used to describe the "first node" of a linked list?

Head

#### Why might the expression "current.next.val" be unsafe?

- Current.next might be null
- If current is the tail node, the expression will throw an error because current.next is null and null does not have a val property
