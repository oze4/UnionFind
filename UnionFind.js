class UnionFind {
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
        if (edges) {
            this.addEdges(edges);
        }
    }

    // Requires 2d array of ints. Must be of following shape:
    //  [[Number, Number], [Number, Number], [Number, Number]]
    addEdges(edges /*=[[0,1],[1,3]]*/) {
        for (const [src, dest] of edges) {
            this.union(src, dest);
        }
    }

    find(node) {
        while (node !== this.parent[node]) {
            this.parent[node] = this.parent[this.parent[node]];
            node = this.parent[node];
        }
        return node;
    }

    union(nodeA, nodeB) {
        let rootA = this.find(nodeA);
        let rootB = this.find(nodeB);

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

    hasPath(nodeA, nodeB) {
        return this.find(nodeA) === this.find(nodeB);
    }
}

module.exports = UnionFind;
