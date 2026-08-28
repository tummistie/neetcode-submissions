class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let x = 0;
        for(let i = 0; i < s.length - 1; i ++){
            console.log(s[i])
            x += Math.abs(s[i].charCodeAt(0) - s[i+1].charCodeAt(0));
        }

        return x;
    }
}
