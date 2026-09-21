class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;

        // While (l <= r) means that we loop up to AND including the final element
        while(l < r){
            // The idea is that there are 2 sides of the array. 
                // [1,2,3,4,5,6] -> both
                // || 
                // [4,5,6,1,2,3] -> both
                // ||
                // [5,6,1,2,3,4] -rhs sorted
                // [6,1,2,3,4,5] -> lhs sorted
                
            const m = l + Math.floor((r - l) / 2);
            // We know that either side is sorted, so we can choose to check if the target is within the sorted side, and if not move to the other side
            if(nums[m] >= nums[l]){ // If the lhs is sorted or the midpoint is the lhs
                if(nums[l] <= target && nums[m] >= target) { // If target is in the sorted range lhs       
                    // r = m - 1;
                    r = m; // r = m m because we check if nums[m] is in the range, so we cant throw it out
                }
                else {
                    // l = m;
                    l = m + 1;
                }
            }
            else if(nums[m] <= nums[r]){
                if(nums[r] >= target && nums[m] <= target){ // if target is in the sorted rhs
                    // l = m + 1;
                    l = m; // l = m because we check if nums[m] is in the range, so we cant throw it out
                }
                else{
                    // r = m;
                    r = m - 1;
                }
            }
            // else{ // this is wrong since this only works when considering the last candidate, since we end up checking (l<r) we need to check last cand after loop concludes
            //     return nums[l] === target ? nums[l] : -1;
            // }
        }
        // return null;
        return nums[l] === target ? l : -1;
    }
}
