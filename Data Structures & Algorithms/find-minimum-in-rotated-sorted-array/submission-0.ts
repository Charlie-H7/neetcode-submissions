class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        // In order to get the min, we know that the array was originally sorted, 
        // by rotating from the begining we know that the side on the array on the first side (not half bc we dont know `n`)
            // is sorted regardless of how many rotations are made
            // Want to return the minimum

            // Ex [4,5,6,1,2,3] 
            // [2,3,4,5,6,1]
                // It should be the case that somehow there is like
            
            // Ex[1,2,3,4,5,6]
                //

                // If the number to the right is bigger than the number in nums[midpoint]
                    // Then its not possible to find a smaller on the rhs that is smaller, due to it being ascending order
                    // Therefore we have to check the left side
                        // Vice versa

        let l = 0;
        let r = nums.length - 1;

        // while(l <= r){
        while(l < r){
            const m = l + Math.floor((r - l) / 2);
            let tk = 0;
            // if(nums[m] < nums[m + 1]){ // If nums to the right are too big
            // if(nums[m] > nums[l]){ // If the m is greater than the entire left side () due to it being sorted before rotations.
            //     // Thus elim lhs
            //     // l = m + 1;
            //     r = m - 1;
            // }
            // else if(nums[m] < nums[r]){
            //     l = m + 1;
            //     // r = m - 1;
            // }
            // else{
            //     return nums[l];
            // }

            if(nums[m] > nums[r]){
                l = m + 1;
            }
            else{
                r = m;
            }

                // Math.min(nums[l], nums[r]);
            // if(nums[l] > nums[r]){
            //     l = m + 1;
            //     // r = m - 1;
            // }
            // else if(nums[l] < nums[r]){
            //     r = m - 1;
            //     // l = m + 1;
            // }
            // else{
            //     return nums[l];
            // }
        }
        return nums[l];
    }
}
