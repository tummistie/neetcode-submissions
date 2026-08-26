class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let answer = new Set(nums);
        return (!(answer.size == nums.length));
    }
}
