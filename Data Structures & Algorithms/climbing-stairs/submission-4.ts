class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let table = Array(n + 1); // create a table that represents the number of ways to get to the i'th index step
        // base case;
        table[0] = 1; // the number of ways to get to the 0th step is 1 (just stay there)
        table[1] = 1; // the number of ways to get to the 1st step is 1 (take a step)

        // Recursion:
            // The number of ways to get to an i'th step by taking two or one steps is is to by getting the ways to get to the i-1 steps + 1
        for(let i = 2; i <= n; i++) {
            table[i] = table[i-1] + table[i-2];
        }
        return table.at(-1);
    }
}
