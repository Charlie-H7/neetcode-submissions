class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        // Question
            // Let LIS(i) be the length of the LIS from i to ...

        // State
            // The state is the last longest is subsequency up to ...
        
        // dp
            // the length of LIS for the first i idx

        // The choices (recursion)
            // Use it: include it if it contributes to the previous max
            // Lose it: lose it

        // Base case
        

        // const dp = new Array(nums.length);
        // dp[0] = 1;

        // for(let i = 0; i < nums.length; i++){
        //     if(nums[i] < Math.min(nums[..., i-1])){
        //         dp[i] = 1;
        //     }
        //     else{
        //         table[i] = 1 + Math.max()
        //     }
        //     // for(let j = 0; j < nums.length; j++) {
        //     //     dp[i] = 
        //     // }
        // }
        // const dp = new Array(nums.length).fill(1);
        const dp = new Array(nums.length);
        for(let i = 0; i < nums.length; i++){
            dp[i] = 1;
        }

        for (let i = 1; i < nums.length; i++){
            for (let j = 0; j < i; j++){
                if(nums[i] > nums[j]) // if the current number were on is larger than the i'th index, then we consider that a valid choice of extending dp[i]
                    dp[i] = Math.max(dp[i], dp[j] + 1); // Then we scan over all of the values of j, and choose the ending of LIS for idx 'i' that results in the largest LIS
            }
        }
        let ans = 0;
        for (const endLis of dp){
            ans = Math.max(ans, endLis);
        }
        return ans;
    }
}
