class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix: number[][]): number {
                        // const dp = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(1));

                        // //choices
                        // for(let row_idx = 0; row_idx < matrix.length; row_idx++) {
                        //     for(let col_idx = 0; col_idx < matrix[0].length; col_idx++) {
                        //         // Now is where we branch and check longest adjacent paths before integrating matrix[row_idx][col_idx]
                        //             // For each path matrix[row_idx][col_idx] to be valid and included in a path
                        //             // 1. It must be the largest in the path to be valid
                        //             // 2. (not really a constraint here just be careful with bound checking)
                        //         // Since we want each cell to store the LARGEST val, we must manually store current largest path we've seen including i,j
                        //         let largest = 1;
                        //         // Vertical checks
                        //             // Path from above
                        //         // if(row_idx != 0){
                        //         if(col_idx != 0){
                        //             if(matrix[row_idx][col_idx] > matrix[row_idx][col_idx - 1])
                        //                 largest = Math.max(largest, dp[row_idx][col_idx - 1] + 1);
                        //                 // dp[row_idx][col_idx] = dp[row_idx][col_idx - 1];
                        //         }
                        //         // Path from below
                        //         // if(row_idx != matrix.length - 1){ // If not the last col
                        //         if (col_idx != matrix[0].length - 1){
                        //             if(matrix[row_idx][col_idx] > matrix[row_idx][col_idx + 1])
                        //                 largest = Math.max(largest, dp[row_idx][col_idx + 1] + 1);
                        //                 // dp[row_idx][col_idx] = dp[row_idx][col_idx - 1];
                        //         }
                        //         // Horizontal checks
                        //             // path from the left
                        //         // if(col_idx != matrix[0].length - 1){
                        //         // if(col_idx != 0){
                        //         if(row_idx != 0){
                        //             if(matrix[row_idx][col_idx] > matrix[row_idx - 1][col_idx])
                        //                 largest = Math.max(largest, dp[row_idx - 1][col_idx] + 1)
                        //         }
                        //         // Path from the right
                        //         // if(col_idx != matrix[0].length - 1){
                        //         if(row_idx != matrix.length - 1){
                        //             if(matrix[row_idx][col_idx] > matrix[row_idx + 1][col_idx])
                        //                 largest = Math.max(largest, dp[row_idx + 1][col_idx] + 1)
                        //         }
                        //         dp[row_idx][col_idx] = largest;
                        //     }
                        // }
                        // return dp.at(-1).at(-1);
        // // ------------NEW ATTEPT------------- //
        // const memo = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(null))// Some ds to store
        // // Helper function: need
        // function dfs(row,col){
        //     // Base case, we are at the edges, so dont recurse, just return 1 (the longest path possible is itself)
        //     if(row === 0 || row === matrix[0].length - 1 || col === 0 || col === matrix.length - 1)
        //         return 1;

        //     // // check if the answer is in the memo -> not sure how this is done here
        //     // memo[row][col] = Math.max(dfs(row - 1,col), dfs(row + 1, col), dfs(row, col - 1), dfs(row, col + 1))
        //     // -> could just be done by calling each individually as above doesn't really memoize
            
        //     // Going left -> if valid path
        //     if(matrix[row - 1][col] > matrix[row][col]) { // larger on left
        //         // If answer already stored
        //         if(memo[row - 1][col] == null) {
        //             dfs(row - 1, col);
        //             // I'm thinking about adding like a list of these answers for each direction and adding each of the dir, take the max and thats the answer for memo for [row][col]
        //         }
        //     }
        //     if(matrix[row + 1][col] > matrix[row][col]) { // larger on right
        //         if(memo[row + 1][col] == null){
        //             dfs(row + 1, col);
        //         }
        //     }
        //     if(matrix[row][col - 1] > matrix[row][col]) { // larger from above
        //         if(memo[row][col - 1] == null)
        //             dfs(row, col - 1);
        //     }
        //     if(matrix[row][col + 1] > matrix[row][col]) { // larger from below
        //         if(memo[row][col + 1] == null)
        //             dfs(row, col + 1);
        //     }
        //     return Math.max(memo[row - 1][col], memo[row + 1][col], memo[row][col - 1], memo[row][col + 1]);
        // }
        // // ------------NEW ATTEPT------------- //

        // ------------FINAL ATTEMPT------------- //

        const rows = matrix.length;
        const cols = matrix[0].length;

        // memo[row][col] = longest increasing path STARTING at [row][col]
        const memo = new Array(rows)
            .fill(0)
            .map(() => new Array(cols).fill(null));

        function dfs(row: number, col: number): number {
            // Already computed
            if (memo[row][col] !== null)
                return memo[row][col];

            let largest = 1;

            // Up
            if (
                row > 0 &&
                matrix[row - 1][col] > matrix[row][col]
            ) {
                largest = Math.max(
                    largest,
                    dfs(row - 1, col) + 1
                );
            }

            // Down
            if (
                row < rows - 1 &&
                matrix[row + 1][col] > matrix[row][col]
            ) {
                largest = Math.max(
                    largest,
                    dfs(row + 1, col) + 1
                );
            }

            // Left
            if (
                col > 0 &&
                matrix[row][col - 1] > matrix[row][col]
            ) {
                largest = Math.max(
                    largest,
                    dfs(row, col - 1) + 1
                );
            }

            // Right
            if (
                col < cols - 1 &&
                matrix[row][col + 1] > matrix[row][col]
            ) {
                largest = Math.max(
                    largest,
                    dfs(row, col + 1) + 1
                );
            }

            // Store result before returning
            memo[row][col] = largest;

            return largest;
        }

        let answer = 0;

        // Every cell could be the starting point
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                answer = Math.max(answer, dfs(row, col));
            }
        }

        return answer;
        // ------------FINAL ATTEMPT------------- //


    }
}
