export default class UnionFind {
    // @param {Number} numberOfItems : number of vertices.
    // @param {Number[][]} edges : Requires 2d array of ints. Must be of following shape:
    //                             [[Number, Number], [Number, Number], [Number, Number]]
    constructor(numberOfItems = 0, edges = null) {
        // Store a nodes root parent.
        this.parent = Array.from({ length: numberOfItems }, (_, i) => i);
        // Store total number of elements in a subset.
        this.size = new Array(numberOfItems).fill(1);
        // Total number of connected nodes.
        this.count = numberOfItems;
        // Store adjacency list for cycle detection.
        this.adjacencyList = {};
        if (edges) {
            this.unionAll(edges);
        }
    }

    #addToAdjacencyList(nodeA, nodeB) {
        if (!this.adjacencyList[nodeA]) {
            this.adjacencyList[nodeA] = [];
        }
        if (!this.adjacencyList[nodeB]) {
            this.adjacencyList[nodeB] = [];
        }
        this.adjacencyList[nodeA].push(nodeB);
        this.adjacencyList[nodeB].push(nodeA);
    }

    // @param {Set} visited
    #detectCycle(node, parent, visited) {
        if (visited.has(node)) {
            return true;
        }
        visited.add(node);
        for (const descendant of this.adjacencyList[node]) {
            if (descendant !== parent && this.#detectCycle(descendant, node, visited)) {
                return true;
            }
        }
        return false;
    }

    find(node) {
        while (node !== this.parent[node]) {
            this.parent[node] = this.parent[this.parent[node]];
            node = this.parent[node];
        }
        return node;
    }

    union(src, dest) {
        this.#addToAdjacencyList(src, dest);

        let rootA = this.find(src);
        let rootB = this.find(dest);

        if (rootA === rootB) {
            return;
        }

        if (this.size[rootA] > this.size[rootB]) {
            this.parent[rootB] = rootA;
            this.size[rootA] += 1;
        } else {
            this.parent[rootA] = rootB;
            this.size[rootB] += 1;
        }

        this.count -= 1;
    }

    // Requires 2d array of ints. Must be of following shape:
    //  [[Number, Number], [Number, Number], [Number, Number]]
    unionAll(edges /*=[[0,1],[1,3]]*/) {
        for (const [src, dest] of edges) {
            this.union(src, dest);
        }
    }

    hasPath(nodeA, nodeB) {
        return this.find(nodeA) === this.find(nodeB);
    }

    hasCycle() {
        const visited = new Set();
        for (const node in Object.keys(this.adjacencyList)) {
            if (!visited.has(node) && this.#detectCycle(node, null, visited)) {
                return true;
            }
        }
        return false;
    }
}
