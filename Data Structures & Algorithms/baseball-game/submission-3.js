class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let nums = [];

        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === '+') {
                nums.push(
                    nums[nums.length - 1] +
                    nums[nums.length - 2]
                );
            }
            else if (operations[i] === 'D') {
                nums.push(nums[nums.length - 1] * 2);
            }
            else if (operations[i] === 'C') {
                nums.pop();
            }
            else {
                nums.push(Number(operations[i]));
            }
        }

        let x = 0;

        for (let i = 0; i < nums.length; i++) {
            x += nums[i];
        }

        return x;
    }
}