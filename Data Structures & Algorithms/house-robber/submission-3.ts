class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number { // Wait a second theres no rule for going for more the just one house away
        // Okay so heres the thing
        // Base cases: since we know that we cannot rob two adjacent houses we know either one of two things BADDDDDDDDDDDDDDDDDDD
        // 1. Assume that starting at house number [0] will for the most part be a generally good starting dp base case
        // 2. However this leads to the question if their is a second valid base case I believe that the teo valid cases are either even or odd houses. as if we start it 0 it must meant that it will always avoid odd number houses as the 'max path'
            // - so the second base case must be an odd indexed one; since [0] will never choose one [1] is a valid choice
        const table: number[] = new Array(nums.length);
        table[0] = nums[0];
        // table[1] = nums[1];
        if(table.length >= 2)
            table[1] = Math.max(nums[0], nums[1]); // Pick which houses of the two have the best choices
        
        // Let OPT() be the optimal solution for nums[::]
        // Let the OPV() be value of the optimal solution: 
            // - let table[i] it be the best we could do with i houses
            // we have two choices of if we are choosing to rob the ith house
            // Use it, we must come in from a path that is at least one house in between (best price from ([i-2] + house))
            // Or lose it (i) and pick the path for the adjacent house
        for(let i = 2; i < nums.length; i++) {
            table[i] = Math.max(table[i-1], table[i-2] + nums[i]);
        }
        return Math.max(...table);
    }
}
