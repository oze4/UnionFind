# UnionFind
JavaScript implementation of [this](https://yuminlee2.medium.com/union-find-algorithm-ffa9cd7d2dba), plus some extras.

# Application(s)

 - Union-Find is used to determine the connected components in a graph
 - We can determine whether 2 nodes are in the same connected component or not in the graph
 - We can also determine that by adding an edge between 2 nodes whether it leads to cycle in the graph or not
 - If we have a very large/dense graph, we can use this data structure

# Usage

## To add nodes, via source and destination:

### Via Constructor

```js
const edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
// We have 6 total vertices.
// NOTE: Even though we have 5 items in our edges array,
//       we have 6 distinct vertices. Therefore, providing
//       the numberOfItems via edges.length will not yield
//       correct results.
const numberOfVertices = 6;
// Or you could programmatically find distinct vertices:
const numberOfVertices = new Set(edges.flat()).size;
const UF = new UnionFind(numberOfVertices, edges);
```

### Via Method

```js
const edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
const numberOfVertices = 6;
// Or you could programmatically find distinct vertices:
const numberOfVertices = new Set(edges.flat()).size;
const UF = new UnionFind(numberOfVertices);
UF.unionAll(edges);
```

### Manually

```js
const edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
const numberOfVertices = 6;
// Or you could programmatically find distinct vertices:
const numberOfVertices = new Set(edges.flat()).size;
const UF = new UnionFind(numberOfVertices);
for (const [src, dest] of edges) {
  UF.union(src, dest);
}
```
---

## Get total number of connected nodes

This will return the number of disjointed sets.

```js
// We assume you have already added edges
const connectedNodesCount = UF.count;
```
---

## Check if cycle exists in any set

```js
const isCyclic = UF.hasCycle();
```

---

## Check if path exists

### Manually

```js
const isPath = UF.find(nodeA) === UF.find(nodeB);
```

### Built-in method

```js
const isPath = UF.hasPath(nodeA, nodeB);
```
