class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let checker = new Map();
        let i = 0;
        while(i < nums.length){
            if(checker.has(nums[i])){
                return true;
            }
            else if(!checker.has[nums[i]]){
                checker.set(nums[i], true);
            }
            i++;
        }

        return false;
    }
}
