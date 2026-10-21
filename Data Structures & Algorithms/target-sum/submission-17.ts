class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums: number[], target: number): number {
        // let range = 0;
        const range = nums.reduce((prev, sum) => prev + sum, 0);
        // console.log(range)

        const dp = new Array(nums.length + 1).fill(0).map(() => new Array((2*range) + 1).fill(0));
        dp[0][range] = 1;
        if(Math.abs(target) > range){
            return 0;
        }
        // console.log(range)
        //[i][target]
        // Loop over nums, target
        console.log(dp[0].length, dp.length)
        for(let i = 1; i < dp.length; i++){
            for(let target = 0; target < dp[0].length; target++){
                // dp[i][target] = dp[i-1][target - nums[i-1]] + dp[i-1][target + nums[i-1]];
                // Come from target - nums[i-1] (add)
                // console.log(target-nums[i-1])
                if(target - nums[i-1] >= 0)
                    dp[i][target] += dp[i-1][target - nums[i-1]];
                if(target + nums[i-1] < dp[0].length)
                    dp[i][target] += dp[i-1][target + nums[i-1]];
            }
        }
        return dp.at(-1)[range + target];
    }
}
