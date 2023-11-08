# 4. Graph Quiz

### What is the difference between a directed and undirected graph?

- In a directed graph, edges can only be traveled in one direction.
- In an undirected graph, edges can be traveled both ways.

### Is an adjacency list the only way to represent a graph?

No. Graphs representations are diverse. We can adjacency lists, edge lits, grid graphs, etc.

### What data structure is typically well-suited to implement "visited" in a graph traversal?

A Set because it has O(1) lookup time and holds unique values only once

### How is a graph different from a tree?

- A graph may not have a "root" and there may be multiple paths between two nodes.
- In a tree, there is only a single unique path between two nodes.

### What general algorithm is best suited to find the shortest path b/w two nodes in a graph?

Breadth-first is best suited because all directions are explored evenly. The first path found via breadth-first traversal is the shortest path.

### What data structure in JavaScript is used to represent a typical adjacency list?

An Object where each node id points to an array of the node's neighbors.
