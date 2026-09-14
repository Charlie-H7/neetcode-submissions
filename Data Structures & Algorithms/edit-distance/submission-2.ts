class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1: string, word2: string): number {
        const dp = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1).fill(0))

        // Base case
        for(let i = 1; i <= word1.length; i++){
            dp[i][0] = i;
        }
        for(let j = 1; j <= word2.length; j++){
            dp[0][j] = j;
        }

        const min_add = 0;
        const min_remove = 0;
        // const rep?
        //dp[i][j]
        for(let i = 1; i <= word1.length; i++){
            for(let j = 1; j <= word2.length; j++){
                // If adding, I would have come from 
                    // dp[i][j-1] as by my definition; [...i] would have to match with the first j-1 chars before adding to word1
                // Check if current chars we are checking match
                // If they do match
                if (word1[i-1] === word2[j-1]){
                    // dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
                    dp[i][j] = dp[i-1][j-1];
                }
                else{
                    // if(i < j){ // If do not match (add)
                    //     dp[i][j] = dp[i][j - 1] + 1;
                    // }
                    // else if(i > j){
                    //     dp[i][j] = dp[i-1][j] + 1;
                    // }
                    // else{
                    //     dp[i][j] = dp[i-1][j-1] + 1;
                    // }
                    dp[i][j] = Math.min(dp[i][j - 1],
                    dp[i-1][j],
                    dp[i-1][j-1]
                    ) + 1

                }
                
            }
        }
        console.log(dp)
        return dp.at(-1).at(-1);
    }
}
