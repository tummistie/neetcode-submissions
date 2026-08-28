class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        if(arr.length === 1){
            arr[0] = -1;
        }
        else if(arr.length == 2){
            arr[0] = Math.max(arr[0], arr[1]);
            arr[1] = -1;
        }
        else{
            for(let i = 0; i < arr.length - 1; i++){ 
                arr[i] = 0; 
                for(let k = i+1; k < arr.length; k++){
                    if(arr[i] < arr[k]){
                        arr[i] = arr[k];
                    }
                }
            }
            arr[arr.length - 1] = -1;
            console.log("hello test");
        }



        return arr;
    }
}
