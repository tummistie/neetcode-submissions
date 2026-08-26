class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
        return false;
        }
        let arr = [...s];
        for(let x of t){
            if(arr.indexOf(x) === -1){
                return false;
            }
            arr.splice(arr.indexOf(x), 1);
        }
        return true;
    }
}
