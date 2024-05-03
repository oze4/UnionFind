# UnionFind
UnionFind Algorithm

# Applications

 - Union-Find is used to determine the connected components in a graph. We can determine whether 2 nodes are in the same connected component or not in the graph. We can also determine that by adding an edge between 2 nodes whether it leads to cycle in the graph or not. We learned that we can reduce its complexity to a very optimum level, so in case of very large and dense graph, we can use this data structure.

 - It is used to determine the cycles in the graph. In the Kruskal’s Algorithm, Union Find Data Structure is used as a subroutine to find the cycles in the graph, which helps in finding the minimum spanning tree.(Spanning tree is a subgraph in a graph which connects all the vertices and spanning tree with minimum sum of weights of all edges in it is called minimum spanning tree). 

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

```js
// We assume you have already added edges
const connectedNodesCount = UF.count;
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
