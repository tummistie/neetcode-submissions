class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        if(nums[0] > target){
            return 0;
        }
        if(nums[0] === target){
            return 0;
        }
        if(nums[nums.length - 1] === target){
            return nums.length - 1;
        }

        for(let i = 0; i < nums.length - 1; i++){
            if(nums[i] === target){
                return i;
            }
            else if(nums[i] < target && nums[i+1] > target){
                return i+1;
            }
        }

        return nums.length;
    }
}
