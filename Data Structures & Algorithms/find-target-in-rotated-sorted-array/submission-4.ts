class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;
        while(l <= r){
            const m = l + Math.floor((r - l) / 2);
            // if(nums[m] > nums[r]){
            // if(nums[m] < target && nums[r] > target){
            if(nums[m] === target)
                return m;
            if(nums[l] <= nums[m]){ // If the first number is less than the midpoint. Then we know that the entire lhs is sorted in values [nums[l]...nums[m]]
                
                // Check if the target is within this sorted side
                if(nums[l] <= target && nums[m] > target){ // target on the left
                    r = m - 1;
                }
                else{
                    l = m + 1; // Target is on the left
                }
            }
            else{ // Otherwise the right side is sorted
                if(nums[m] < target && nums[r] >= target){ // Target is on the right
                    l = m + 1;
                }
                else{
                    r = m - 1;
                }
            }
            // // if(nums[r] > target && target > nums[m]){
            // if(nums[r] > target){
            //     // Then it must be in the lhs so move l to m + 1
            //     l = m + 1;
            // }
            // // else if(nums[m] > target && nums[l] < target){
            // // else if(nums[l] < target && target < nums[m]){
            // else if(nums[l] < target){
            //     r = m - 1;
            // }
            // else{
            //     console.log(l,r,m);
            //     return m;
            //     // if(nums[m] === target){
            //     //     return nums[m];
            //     // }
            //     // else{
            //     //     return -1
            //     // }
            // }
            console.log(l,r,m);
        }
        return -1;
    }
}
