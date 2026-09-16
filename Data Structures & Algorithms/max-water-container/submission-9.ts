class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        // This is an unordered array
        let _distance = 0;
        let l = 0;
        let r = heights.length - 1;
        let currBest = 0; // Optimized val
        // Loop over array
        while(l < r){
            const currArea = Math.min(heights[l], heights[r]) * (r-l)
            // if current area is begger than best update
            if(currBest < currArea){
                currBest = currArea;
                (heights[l] < heights[r]) ? l++ : r--; // Move as per the logic below to find a better potential area
            }
            else { // If its not bigger than the current area we have two choices when it comes to moving ptr
                // The idea is to move the smaller of the two current pointers (l,r) as the limiting factor
                (heights[l] < heights[r]) ? l++ : r--;
            }
        }
        return currBest;
    }
}
