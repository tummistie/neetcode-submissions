class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let arr = [];
        let map = new Map();

        for(let i = 0; i < nums.length; i++){
            if(!map.get(nums[i])){
                map.set(nums[i], 1)
            }
            else if(map.get(nums[i])){
                map.set(nums[i], map.get(nums[i]) + 1);
            }
        }

        for(const [key, value] of map){
            if(!arr[value]){
                arr[value] = [key];
            }
            else{
                arr[value].push(key);
            }
        }

        let answer = [];
        
        let i = arr.length - 1;
        while(k !== 0){
            if(arr[i] && arr[i].length >= 1){
                answer.push(arr[i].pop());
                k--;
            }
            else if(!arr[i] || arr[i].length === 0){
                i--;
            }
        }
        return answer;
    }
}
