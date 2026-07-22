class Solution {
   /**
    * @param {number[]} nums
    * @return {number}
    */
    maxProduct(nums: number[]): number {
        //---- Old ----//
        //     const dp = new Array(nums.length);
        //     if (nums.length === 1) return nums[0];
        //    // Base cases
        //     dp[0] = nums[0] === 0 ? 0 : nums[0] ;

        //     // let prev_max = 0;
        //     let prev_max = nums[0] === 0 ? 0: nums[0];
        //     let prev_min = nums[0]; 

        //     for(let i = 1; i < nums.length; i++){
        //         //case 1: We attach nums[i] to the number that'll get us to that,ll give us the highest positive value
        //         const maxEnding = Math.max(nums[i], nums[i] * prev_max, nums[i] * prev_min);
        //         //case 2: we attach nums[i] to get (the most negative number)
        //         const minEnding = Math.min(nums[i], nums[i] * prev_max, nums[i] * prev_min);
        //         dp[i] = maxEnding;

        //         // update the prev min and prev_max
        //         prev_max = maxEnding;
        //         prev_min = minEnding;
        //         console.log(dp[i])
        //     }
        //     const ans = (Math.max(...dp));
        //     return Object.is(ans, -0) ? 0 : ans;
        // }
            //---- Old ----//

        // BaseCases
        let prevMax = nums[0];
        let prevMin = nums[0];
        let ans = nums[0];


        // Recurrence 3 cases
        for(let i = 1; i < nums.length; i++) {
            const curr = nums[i];
            const maxEnding = Math.max(
                curr,
                curr * prevMax,
                curr * prevMin
            );
            const minEnding = Math.min(
                curr,
                curr * prevMax,
                curr * prevMin
            );

            // update the prev vals for next iter
            prevMax = maxEnding;
            prevMin = minEnding;

            ans = Math.max(ans, maxEnding);
        }
        return ans;
    }
}

// Okay this is starting to become a problem; I like my dp definition; i dont like my choices(recursion)