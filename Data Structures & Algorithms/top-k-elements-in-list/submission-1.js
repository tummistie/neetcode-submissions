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

        while(k !== 0){
            let max = 0;
            let maxKey = '';
            for(const[key, value] of map){
                if(value > max){
                    max = value;
                    maxKey = key;
                }
            }
            arr.push(maxKey);
            map.delete(maxKey);
            k--;
        }

        return arr;
    }
}
