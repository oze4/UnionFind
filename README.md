# UnionFind
UnionFind Algorithm

# Usage

## To add nodes, via source and destination:

### Via Constructor

```js
const edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
// We have 6 total vertices.
// NOTE: Even though we have 5 items in our edges array,
//       we have 6 unique vertices. Therefore, providing
//       the numberOfItems via edges.length will not yield
//       correct results.
const numberOfVertices = 6;
const UF = new UnionFind(numberOfVertices, edges);
```

### Via Method

```js
const edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
const numberOfVertices = 6;
const UF = new UnionFind(numberOfVertices);
UF.unionAll(edges);
```

### Manually

```js
const edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
const numberOfVertices = 6;
const UF = new UnionFind(numberOfVertices);
for (const [src, dest] of edges) {
  UF.union(src, dest);
}
```
---

## Get total number of connected nodes

```js
// We assume you have already added edges
const connectedNodes = UF.count;
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
