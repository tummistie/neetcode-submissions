class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let arr = [];
        let answer = [];

        for(let i = 0; i < strs.length; i++){
            let counter = 0;
            let string = strs[i];
            let sortedString = string.split('').sort().join('');

            for(let k = 0; k < arr.length; k++){
                if(sortedString === arr[k][0]){
                    answer[k].push(strs[i]);
                    counter = 1;
                    break;
                }
            } 

            if(counter === 0){
                arr.push([sortedString]);
                answer.push([strs[i]]);
            }
        }

        return answer;
    }
}
