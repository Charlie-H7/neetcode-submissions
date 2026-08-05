class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        // Going for prefix -> if at an m*n table, where must I have come from to wind up there
            // I'm starting to see how the first stuff doesn't always make sense since in this case doesnt really make sense "ending in the first m/n tables || starting from m/n table (unless its like starting from n*m table)"
        // UniquePaths(m, n) = the number of ways that can be take from the top left corner to the bottom right of a n*m grid

        // State: What changes
            // 1. the size of the sub-tables
        // What does NOT change: the position (we always start withing the top left of the grid/subgrid); and idx doesnt even make sense lol
        
        // Dp[n, m] definition: Num ways to get from top left of an m*n matrix to the bottom right of it

        // The choices: lets assume that we are solving for a subtable somewhere within the recurrence; 
            // lets assume since we are bottom up, we need like 
            
            // we can either come in from the top or the left. 
            
            // if we come in from the left then assume that the only step left to reach the bottom right is the number of ways to get to that square then take one step to the right to reach the end (uniquePaths(m, n-1)) + 1 

            // If we come in from the top then assum that the number of ways to reach bottom right step, is the number of ways to get to the step above it, and then step once down (uniquePaths(m-1, n)) + 1 


        // Base case: n*m has 
        // dp[0][0] = 1; // no grid has one unique way to explore (do nothing) ->
        // if(n == 1) -> dp[0:m][n=1] = 1; (only one unique step you can take for (m*1) grid {step right})
        // if(m == 1) -> dp[m=1][0:n] = 1; (only one unique step you can take for (1*m) grid {step down})
        
        // for col (m) for right now assume no sentinel; also maybe make [0][0] = 0

        const dp = new Array(n).fill(0).map(() => Array(m).fill(1));
        console.log(dp)
        let ans = 0
        // col
        for(let i = 1; i < n; i++){
            // for rows
            console.log(i)
            for (let j = 1; j < m; j++) {
                dp[i][j] = (dp[i-1][j] + dp[i][j-1]);
            }
        }
        // return dp.at(-1).at(-1);
        return dp[n-1][m-1]
    }
}
