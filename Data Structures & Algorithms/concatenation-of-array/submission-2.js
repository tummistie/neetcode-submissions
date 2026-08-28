class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let arr = [];
        for(let i = 0; i < nums.length; i++){
            arr[i] = nums[i];
            arr[i+nums.length] = nums[i];
        }

        return arr;
    }
}
