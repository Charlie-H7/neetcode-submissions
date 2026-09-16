class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        // Since this problem is asking us to compare combinations of 3 a standard two pointer approach doesnt work
        // let i = 0; // let i be the 3rd sum for which we check all combinations in a standard two pointer (unsorted so nothing can be deduced this is brute force)
        nums.sort((a, b) => a - b);
        const ans = new Array(); // This is run in O(n*log n) this is necessary as my current while loop iteration depends on the idea that the array is sorted {hence while l < r} this only behaves if lhs < rhs
        for(let i = 0; i < nums.length; i++){
            let l = i + 1; // If I already check all combinations involving i why would i need to do it again for l, just check combinations on the intervals I havent verified yet. (can probably get rid of 1st cond)
            let r = nums.length - 1;

            if(nums[i] > 0){ // If the array is sorted then theres no need to check triplet sums that are after this as all pos
                break
            }
            // Since duplicate numbers are allowed, need to skip them if we already considered them
            if(nums[i] === nums[i-1] && i > 0){
                continue;
            }


            // scan over combinations if they are not the fixed index of i
            while(l < r){
                // if 'i' is the same idx as l or r just move the respective collision
                // if(i === l){ (not used)
                //     l++;
                // }

                // ---
                const sum = nums[i] + nums[l] + nums[r];
                // If the sum is too small
                if(sum < 0){
                    l++; // move left pointer
                }
                else if(sum > 0){ // If the sum is too big
                    r--; // move rp
                }
                else{ // The sum is zero
                    // Since this is a potential triplet, we have to add it to our solution. 
                    // Then skip all dupes of l at the left pointer
                    ans.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;

                    while(l < r && nums[l] === nums[l-1]){
                        l++;
                    }
                }

                // // Bad below
                // if(i === r){ 
                // // if (i === r){
                //     r--;
                // }
                // else { // else if no collision then we check the sum and add it to the solution == 0
                //     if(nums[l] + nums[r] + nums[i] === 0){
                //         ans.push([nums[l], nums[r], nums[i]]);
                //     }
                //     l++;
                //     r--;
                // }
            }
        }
        return ans; // Hmmm okay I like this solution but it kinda doesn't deal with dupes
    }
}
