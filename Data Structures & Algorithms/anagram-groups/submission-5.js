class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let arr = [];
        let answer = [];
        let map = new Map();

        for(let i = 0; i < strs.length; i++){
            let counter = 0;
            let string = strs[i];
            let sortedString = string.split('').sort().join('');

            if(!map.has(sortedString)){
                map.set(sortedString, [strs[i]]);
            }
            else{
                answer = map.get(sortedString);
                answer.push(strs[i]);
                map.set(sortedString, answer);
            }
        }

        for(const [key, value] of map){
            arr.push(value);
        }

        return arr;
    }
}