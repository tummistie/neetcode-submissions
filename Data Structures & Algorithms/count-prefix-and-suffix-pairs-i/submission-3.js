class TrieNode {
    constructor() {
        this.children = new Map();
        this.count = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} w
     * @return {void}
     */
    add(w) {
        let cur = this.root;
        let n = w.length;
        for (let i = 0; i < n; i++) {
            let key = w[i] + w[n - 1 - i];
            if (!cur.children.has(key)) {
                cur.children.set(key, new TrieNode());
            }
            cur = cur.children.get(key);
            cur.count++;
        }
    }

    /**
     * @param {string} words
     * @return {number}
     */
    count(w) {
        let cur = this.root;
        let n = w.length;
        for (let i = 0; i < n; i++) {
            let key = w[i] + w[n - 1 - i];
            if (!cur.children.has(key)) return 0;
            cur = cur.children.get(key);
        }
        return cur.count;
    }
}

class Solution {
    /**
     * @param {string[]} words
     * @return {number}
     */
    countPrefixSuffixPairs(words) {
        let res = 0;
        let root = new Trie();
        for (let i = words.length - 1; i >= 0; i--) {
            res += root.count(words[i]);
            root.add(words[i]);
        }
        return res;
    }
}