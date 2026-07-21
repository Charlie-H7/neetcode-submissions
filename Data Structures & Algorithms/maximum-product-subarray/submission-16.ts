class Solution {
   /**
    * @param {number[]} nums
    * @return {number}
    */
   maxProduct(nums: number[]): number {
       const dp = new Array(nums.length);
       if (nums.length === 1) return nums[0];
       // Base cases
       // dp[0] = nums[0];
    //    dp[0] = nums[0] === 0 ? 1 : nums[0] ;
    dp[0] = nums[0] === 0 ? 0 : nums[0] ;
       // dp[1] = nums[] in case i need offset

    // let prev_max = 0;
    let prev_max = nums[0] === 0 ? 0: nums[0];
    let prev_min = 0; 

       for(let i = 1; i < nums.length; i++){
           // dp[i] = Math.max(
           //     dp[i-1] * nums[i],
           //     dp[i-1]
           // );
        //    if (nums[i] === 0) {
        //        dp[i] = 1;
        //    }
// I cant cut out a possible branch if i-1 is neg and i is positive as it could be possible that an idx 'j' where j > i has a negative thus making it positive again. The only thing truly breaking an increasing subproduct is if nums[i-1] = 0; think about it
            // if (nums[i-1 == 0])
                    // if (nums[i-1] <= 0 && nums[i] >= 0) {
                    //     dp[i] = nums[i];
                    // }   
                    // else {
                    //     dp[i] = dp[i-1] * nums[i];
                    // }
            // if(nums[i-1] !== 0) {
            //     dp[i] = dp[i-1] * nums[i]; 
            // }

            // These values sole purpose is to 

            // const minEnding = 0;
            // const maxEnding = 0;

            //case 1: We attach nums[i] to the number that'll get us to that,ll give us the highest positive value
            const maxEnding = Math.max(nums[i], nums[i] * prev_max, nums[i] * prev_min);
            //case 2: we attach nums[i] to get (the most negative number)
            const minEnding = Math.min(nums[i], nums[i] * prev_max, nums[i] * prev_min);
            dp[i] = maxEnding;

            // update the prev min and prev_max
            prev_max = maxEnding;
            prev_min = minEnding;
            
            // else{
            //     dp[i] = nums[i]; // 0 times curr numb so always start new subarray
            // }
            console.log(dp[i])


       }
       const ans = (Math.max(...dp));
       return Object.is(ans, -0) ? 0 : ans;
   }
}

// Okay this is starting to become a problem; I like my dp definition; i dont like my choices(recursion)



