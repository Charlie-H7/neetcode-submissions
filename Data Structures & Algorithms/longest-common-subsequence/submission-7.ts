class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1: string, text2: string): number { // Counting problem
        // lcs(i,j) the longest common subsequence that can be made by ending t1 and t2 at idx i,j respec.

        // Base case:
            // There is no lcs between strings if one is empty

        // Dp[i,j] - the length of the lcs of t1, t2 that end at idx i and j

        // Choices - For each char j being considered to match with i:
            // if match take only if it is larger than
                // dp[i, j] = dp[i, j]
            // Otherwise dont and look for another one and look for a differnt 

        const dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0));

        for(let i = 1; i < text1.length + 1; i++){
            for(let j = 1; j < text2.length + 1; j++){
                if(text1[i - 1] === text2[j - 1]){
                    // Take the max of length of lcs that could be made by matching i of t1 with the prev j char of t2
                    // dp[i][j] = Math.max(dp[i-1][j-1] + 1, dp[i][j-1]);
                    dp[i][j] = dp[i-1][j-1] + 1;
                }
                else{
                    // dp[i][j] = dp[i][j-1];
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        return dp.at(-1).at(-1);
    }
}
