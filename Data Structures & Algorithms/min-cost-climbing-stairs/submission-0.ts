class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        // This DP rather than asking you to combine ways. this is a minimizatioin dp problem. 
        const table: number[] = new Array(cost.length);

        // Base case: The costs of steping i + 1 or i+2 from both starting positions.
        table[0] = cost.at(0);
        table[1] = cost.at(1);
        // The recursion looks like this.
        // Let table be the cheapest cost to reach the i'th step
        /* the cost to get to the i means;
            1. You can get to the i'th step from the i-1 or i-2 step
            2. Use it or lose it case:
                - Taking the path from the i-1 step is cheaper than the path taken from the i-2 step
                    - use table i-1 and add the cost of step i
                - (just the opposite for i-2)
        */
        for(let i = 2; i < table.length; i++){
            // select the minimum cost to get to the i'th step from the either of the past 2 steps
            table[i] = Math.min(table[i-2], table[i-1]) + cost[i];
            // table[i] = Math.min(table[i-2], table[i-1]);
        }
        // return table.at(-1);
        return Math.min(table[table.length - 2], table[table.length - 1])
    }
}
