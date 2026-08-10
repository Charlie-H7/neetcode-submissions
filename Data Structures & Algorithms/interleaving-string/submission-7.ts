class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1: string, s2: string, s3: string): boolean {
        if(s3 === "")
            return true;
        const dp = new Array(s1.length + 1).fill(0).map(() => new Array(s2.length + 1).fill(false));
        // Base case
        if (s1.length + s2.length !== s3.length)
            return false;
        // dp[0][0] = false; //sentinel
        dp[0][0] = true;
        // init start rows
        for(let i = 1; i < s1.length + 1; i++) // NOTE WAIT WHAT IF S3 < S1 INDEX ERR but i like the logic -> could just do check
            // dp[i][0] = s3[i-1] === s1[i-1]; // s3[0] : s1 len // Need to check if the previous prefix was possible
            dp[i][0] = dp[i-1][0] && s1[i-1] === s3[i-1];
        for(let j = 1; j < s2.length + 1; j++)
            // dp[0][j] = s3[j-1] === s2[j-1]; Need to check if the previous prefix was possible
            dp[0][j] = dp[0][j-1] && s2[j-1] === s3[j-1];

        // ret if either of base case end in one dp[end][0] == t || dp[0][end] == t
        let s3_idx_tracker = 0
        // Recursion
        for(let i = 1; i < s1.length + 1; i++){
            for(let j = 1; j < s2.length + 1; j++){
                // if(dp[i][j-1] === true && s2[j-1] === s3[j-1]) { // if possible to build s3 using first i chars in s1 and possible up to j-1 in s2 (add s2[j] if matches s3)
                if(dp[i][j-1] === true && s2[j-1] === s3[i + j - 1]) { // I FUCKING KNEW IT
                    dp[i][j] = true;
                    // s3_idx_tracker += 1;
                }
                // else if(dp[i-1][j] === true && s1[i - 1] === s3[i - 1]) {
                // else if(dp[i-1][j] === true && s1[i - 1] === s3[s3_idx_tracker]) {
                else if(dp[i-1][j] === true && s1[i - 1] === s3[i + j - 1]) {
                    dp[i][j] = true;
                    // s3_idx_tracker += 1;
                }
                else{
                    dp[i][j] = false;
                }
            }
        }
        // let d2_ans = false;
        // for(let tk = s3_idx_tracker; tk != 0; tk--){
        //     if(dp[s3_idx_tracker][tk] === true)
        //         return true
        // }
        // return dp.at(s3_idx_tracker).at(-1);
        // return false;
        return dp.at(-1).at(-1);
    }
}
