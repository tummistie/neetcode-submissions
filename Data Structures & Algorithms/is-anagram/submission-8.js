class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }   

        let map = new Map();

        for(let x of s){
            map.set(x, (map.get(x) || 0) + 1);
        }

        for(let x of t){
            map.set(x, (map.get(x) || 0) - 1);
        }

        for(let values of map.values()){
            if(values !== 0){
                return false;
            }
        }

        return true;
    }
}
