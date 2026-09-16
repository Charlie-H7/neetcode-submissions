class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0;
        let r = heights.length - 1; 
        let best = 0;
        while (l < r){
            // console.log(heights[l],heights[r]);
            best = Math.max((Math.min(heights[l],heights[r]) * (r - l)), best);
            heights[l] < heights[r] ? l++ : r--;
        }
        return best
    }
}
