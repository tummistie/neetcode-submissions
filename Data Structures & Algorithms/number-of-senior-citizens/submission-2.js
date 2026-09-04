class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0;
        let temp = 0;
        let age = "";
        
        for(let i = 0; i < details.length; i++){
            temp = details[i];
            age = temp[11] + temp[12];
            if(Number(age) > 60){
                count++;
            }
        }

        return count;
    }
}
