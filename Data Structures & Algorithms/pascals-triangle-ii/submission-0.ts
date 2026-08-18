class Solution {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */
    getRow(rowIndex: number): number[] {
        // getRow(rowIndex) returns the rowIndex of the pascal triangle.

        // State: what changes in the problem
            // The answer is obvious. Note that what changes is the row index of the pascal triangle
            // Also note that the length of the triangle is linear row n -> n cells in triangle (row - 2)

        // dp(rowIndex) returns the row for the first i row index

        // Base cases:
            // The first row of the pascal triangle is 1
        if(rowIndex === 0)
            return [1];
        const dp = new Array(rowIndex).fill(1);
        dp[0] = [1];
        dp[1] = [1, 1];
        for(let i = 2; i <= rowIndex; i++){
            dp[i] = new Array(i + 1).fill(1);
            // For the current row, add the prev rows two nums
            for (let j = 1; j < i; j++){
                dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
            }
            // console.log(dp);
        }
        return dp.at(-1);
    }
}
