# UnionFind
JavaScript implementation of [this](https://yuminlee2.medium.com/union-find-algorithm-ffa9cd7d2dba), plus some extras.

# Application(s)

 - Union-Find is used to determine the connected components in a graph
 - We can determine whether 2 nodes are in the same connected component or not in the graph
 - We can also determine that by adding an edge between 2 nodes whether it leads to cycle in the graph or not
 - If we have a very large/dense graph, we can use this data structure

# Usage

## Add Edges/Nodes

### Constructor

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

### Built-in Method

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

## Get Count of Disjointed Components/Sets

This will return the number of disjointed components/sets.

```js
// We assume you have already added edges
const numOfSets = UF.count;
```
---

## Check for Cycle

Checks for cycle in any component/set (if graph contains disjointed sets).

```js
const isCyclic = UF.hasCycle();
```

---

## Check if Path Exists

Check if a path exists between two nodes.

### Manually

```js
const isPath = UF.find(nodeA) === UF.find(nodeB);
```

### Built-in Method

```js
const isPath = UF.hasPath(nodeA, nodeB);
```
