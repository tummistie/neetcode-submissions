class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let m_curr = 0;
        let m_answer = 0;

        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 1){
                m_curr++;
                if(m_curr > m_answer){
                    m_answer = m_curr;
                }
            }
            else{
                m_curr = 0;
            }
        }
        
        return m_answer;
    }
}
