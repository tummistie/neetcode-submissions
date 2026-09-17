class Solution {
    /**
     * @param {string[]} words
     * @return {number}
     */
    countPrefixSuffixPairs(words) {
        function isPrefixAndSuffix(str1, str2){
            for(let i = 0; i < str1.length; i++){
                if(str1[i] !== str2[i]){
                    return false;
                }
                if(str1[i] !== str2[str2.length - str1.length + i]){
                    return false;
                }
            }
            return true;
        }

        let counter = 0;

        for(let i = 0; i < words.length; i++){
            for(let j = i + 1; j < words.length; j++){
                if(words[i].length <= words[j].length){
                    if(isPrefixAndSuffix(words[i], words[j])){
                        counter += 1;
                    }
                }
            }
        }
        return counter;
    }
}
