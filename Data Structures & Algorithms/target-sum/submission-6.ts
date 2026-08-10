class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums: number[], target: number): number {
        // // findTargetSumWays(nums, target) = The number of ways to build target with the first i nums
        // // state: 
        //     // Target: The target we are building to
        //     //idx: The numbers we are allowed to use
        // // The choices(recurrence):
        //     // We take the i'th number if it completes target (by adding or subtracting)
        //     // We lose the i'th number: if it doesnt complete the target by adding or subtracting
        // // Base Case:
        //     // The ways to make a target of 0 with any number is one
        //         // dp[0][num]
        // // const dp = new Array(nums.length + 1).fill(0).map(() => new Array(target + 1).fill(0));
        // const dp = new Array(target + 1).fill(0).map(() => new Array(nums.length + 1).fill(0));

        // // Bc
        // for(let i = 0; i < nums.length + 1; i++){
        //     dp[0][i] = 1;
        // }
        // // Recurrence:
        // for(let target_subset = 1; target_subset < target + 1; target_subset++){
        //     for(let j = 1; j < nums.length + 1; j++){
        //         // If it fits into target eiter way
        //         // if(target_subset - nums[j] > 0 || target_subset + nums[j] == 0){
        //         if(target_subset - nums[j] >= 0){
        //             // dp[target_subset][j] = the nums of ways to add up to amount -w-out taking coin 
        //             dp[target_subset][j] = dp[target_subset-nums[j-1]][j] + dp[target_subset][j-1]; // take amount-num; and dont take (amount doesn't change)
        //         }
        //         else {
        //             dp[target_subset][j] = dp[target_subset][j-1];
        //         }

        //     }
        // }
        // return dp[target][nums.length];

        // if(target == 0){
        //    return 1;
        // }
        /*
        const dp = new Array(nums.length + 1).fill(0).map(() => new Array(target + 1).fill(0));
        dp[0][0] = 1;
        
         
        for(let i = 1; i < nums.length + 1; i++){
            for(let sum = 1; sum < target; sum++){
                dp[i][sum] = dp[i-1][sum - nums[i-1]] + dp[i-1][sum + nums[i-1]]
            }
        }
        return dp.at(-1).at(-1)
        */

    // const total = nums.reduce((sum, num) => sum + num, 0);
    // const offset = total;

    // const dp = new Array(nums.length + 1)
    //     .fill(0)
    //     .map(() => new Array(2 * total + 1).fill(0));

    // dp[0][offset] = 1;

    // for (let i = 1; i < nums.length + 1; i++) {
    //     for (let sum = -total; sum <= total; sum++) {

    //         const index = sum + offset;

    //         dp[i][index] =
    //             dp[i - 1][sum - nums[i - 1] + offset] +
    //             dp[i - 1][sum + nums[i - 1] + offset];
    //     }
    // }

    // return dp[nums.length][target + offset];
    
    const total = nums.reduce((sum, num) => sum + num, 0);
    const offset = total;

    if (Math.abs(target) > total) {
        return 0;
    }

    const dp = new Array(nums.length + 1)
        .fill(0)
        .map(() => new Array(2 * total + 1).fill(0));

    dp[0][offset] = 1;

    for (let i = 1; i < nums.length + 1; i++) {
        for (let sum = -total; sum <= total; sum++) {

            const index = sum + offset;
            const num = nums[i - 1];

            if (sum - num >= -total) {
                dp[i][index] +=
                    dp[i - 1][sum - num + offset];
            }

            if (sum + num <= total) {
                dp[i][index] +=
                    dp[i - 1][sum + num + offset];
            }
        }
    }

    return dp[nums.length][target + offset];


    }
}
