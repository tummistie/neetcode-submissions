class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
                arr.push(s[i]);
            }
            else if (s[i] === ')') {
                if (arr[arr.length - 1] !== '(') {
                    return false;
                }
                arr.pop();
            }
            else if (s[i] === ']') {
                if (arr[arr.length - 1] !== '[') {
                    return false;
                }
                arr.pop();
            }
            else if (s[i] === '}') {
                if (arr[arr.length - 1] !== '{') {
                    return false;
                }
                arr.pop();
            }
        }

        return arr.length === 0;
    }
}