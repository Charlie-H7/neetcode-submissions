class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        // maxProduct(nums[]) -> the max product that exists in some CONTIGUOUS subarray of the problem
        // dp[i] -> the max product subarray up to the first i numbers
        // state -> i (what changes)
        // Recurrence -> choices
            // include `i` -> i contributes to the largest contiguous product so far
            // dont
            // in
        // const dp = new Array(nums.length + 1).fill(nums[0]);
        let prevMin = nums[0];
        let prevMax = nums[0];
        let ans = nums[0];
        for(let i = 1; i < nums.length; i++){
            // Oh wait this is bad because if i do it this way prev_min will make a decision on new values of max
            const newMax = Math.max(nums[i], prevMax*nums[i], prevMin*nums[i]);
            const newMin = Math.min(nums[i], prevMax*nums[i], prevMin*nums[i]);
            // console.log(prevMax);
            // console.log(`min ${prevMin}`)
            prevMax = newMax;
            prevMin = newMin;
            ans = Math.max(ans, prevMax); // Have to check it because its not guarunteed that the product ending with the i'th elt is the answer,  check ans (ex: [2, 4, -3, 5] - without this ans = 5)
        }
        return ans;

    }
}
