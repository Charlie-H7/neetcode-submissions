class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;
        
        while(l < r){
            const m = l + Math.floor((r - l) / 2);

            if(nums[l] <= nums[m]){
                if(target >= nums[l] && target <= nums[m]){ // If lhs
                    // r = m - 1;
                    r = m;
                }
                else{
                    l = m + 1;
                }
            }
            else if(nums[r] >= nums[m]){
                if(target <= nums[r] && target >= nums[m]){
                    // l = m + 1;
                    l = m;
                }
                else{
                    r = m - 1;
                }
            }
            // else{
            //     if(nums[m] === target){
            //         return m;
            //     }
            //     return -1;
            // }
        }
           return nums[l] === target ? l : -1;
    }
}
