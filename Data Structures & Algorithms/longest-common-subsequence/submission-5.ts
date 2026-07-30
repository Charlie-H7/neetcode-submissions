class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1: string, text2: string): number {
        // We'll consider the courses solution: (for more in depth go to course)
        const n = text1.length;
        const m = text2.length;
        // LCS(i,j) - The length of the LCS for lcs using the first LCS chars of text1, and first 'j' chars of text2 
                // const dp = new Array(n + 1).fill(new Array(m + 1).fill(0)); // n*m array
                // NOTE: bruh the code above dont work it, .fill() works by filling reference,
                    // In other words filling with an array means they're all the same object in memory, changes all filled arrays
                // Solution:
                    // Your syntax looks like it should work, but the reason it doesn't is because of how new Array(n + 1) behaves
                    // But you actually get: [ <empty>, <empty>, <empty> ]
                // const dp = new Array(n + 1).map(() => new Array(m + 1).fill(0));
        const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0)); // You have to make sure the 1d is initialized by fill. Also; () is whats returned by calling the anon function (Array) for each elt in 1d, callback function
        // State: how many chars of text1 and chars of text2 (i,j)

        // dp[i,j] = Length of LCS between text1[0: i] and text2[0:j] // first i and j chars
        
        // The choices (recurrence): 
            // our state depends on everything before i and j chars of text1 and text2 respectively

            // Case 1: they match
                // so dp[i][j] = 1 + dp[i-1][j-1]
            // Case 2: dont match:
                // Ignore last char of text1
                    // dp[i-1][j]
                // Ignore last char of text2
                    // dp[i][j-1]
                // Take max of these choices, since we want to get the highest LCS
            
        // Base Case:
            // I prefix has len 0
                // If i = 0 OR j = 0
                    // dp[i][j] = 0 // Since an empty string of text 1 or text 2 has no common subsequence

        for(let i = 1; i < n + 1; i++){ // n + 1 for the offset of the sentinel array (as described for the behavior of base case)
            for(let j = 1; j < m + 1; j++){
                if(text1[i-1] === text2[j-1]){ // Have to do -1 because of the sentinel offset to read first char
                    dp[i][j] = 1 + dp[i-1][j-1];
                    // console.log(`entered here for prefix up to ${i} and ${j}`)
                }
                else { // do not match
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        return dp[n][m];
    }
}
