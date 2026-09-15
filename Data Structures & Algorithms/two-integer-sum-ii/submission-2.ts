class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let l = 0;
        let r = numbers.length - 1;

        // Since it's sorted two pointers works
        
        // Loop the array and see if the pointers make up target
        while(l < r){

            // target not made there are 2 cases
            // 1. sum too big -> move rp
            // 2. sum too small -> move lp
            if(numbers[l] + numbers[r] > target){
                r--;
            }
            else if(numbers[l] + numbers[r] < target){
                l++;
            }
            // If target found return pair
            // if(numbers[l] + numbers[r] === target){
            else{
                return [l + 1,r + 1]; // Why did it have to be one indexed
            }
        }
    }
}
