class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let found = false;
        let l_range = 0;
        let r_range = nums.length - 1;

        // while(!found && r_range - l_range > 0){
        // while(r_range - 2 !== l_range){
        while(l_range <= r_range){
            // let midpoint = l_range + Math.floor((r_range - l_range) / 2)// Math.floor(r_range - l_range / 2);
            let midpoint = l_range + Math.floor((r_range - l_range)/2); // r-l==width (offset + wid/2)
            if(nums[midpoint] < target){
                l_range = midpoint + 1;
            }
            else if(nums[midpoint] > target){
                r_range = midpoint - 1;
            }
            else{
                return midpoint;
            }
        }
        return -1;
        // while(!found) {
        //     let midpoint = Math.floor(nums.length / 2);
        //     if(nums[midpoint]) 
        //     target > nums[midpoint] ? midpoint = Math.floor(nums.length - midpoint) : Math.floor(midpoint / 2);
            
        // }
    }
}
