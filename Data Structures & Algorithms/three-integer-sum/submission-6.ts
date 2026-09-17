class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a,b) => a-b); // Sort in ascending order
        // let l = 0;
        // let r = nums.length - 1;
        const tripletsList = new Array<Array<number>>;
        let sum = 0;

        // We should loop until either
            // 1. We finish combinations
        // Fix one value `i` as the value we are checking with all of the other combinations
        // We know that the array is sorted (because we sort it). Thus in order to avoid repeating combinations.
        // Exclude all of the 
        for(let i = 0; i < nums.length; i++){
            let l = i + 1;
            let r = nums.length - 1;
            // We know to stop looking when nums[i] is > 0 as we know that all of the remaining numbers for l,r > i are pos
            if(nums[i] > 0){
                // console.log(nums[i])
                break;
            }

            // if(i > 0) if not the beginning
            // We've already checked every triplet beginning
            // with this value of nums[i].
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            // while we can loop (l < r)
            while(l < r){
                sum = nums[i] + nums[l] + nums[r]
                if(sum > 0){ // sum too big
                    r--;
                }
                else if(sum < 0){ // sum too small
                    l++;
                }
                // if(nums[i] + nums[l] + nums[r] === 0){
                else{
                    tripletsList.push([nums[i],nums[l],nums[r]]);
                    l++;
                    r--;
                    // Don't recreate the same triplet.
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
                
                // console.log(l,r)
            }
        }
        return tripletsList;
    }
}
