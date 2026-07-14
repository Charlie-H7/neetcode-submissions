class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        /*  let sum_tracker be a tracker where the key is the i'th index of the nums array
            If the 

        */
        // const sum_tracker: Record<[number, number], number> = {}; 
        // let answer: [number | null, number | null] = [null,null];
        const sum_tracker: Record<number, number> = {};
        // for (const num of nums){
        for (let i = 0; i < nums.length; i++){
            if(nums[i] in sum_tracker) {
                // answer[0] = sum_tracker[nums[i]];
                // answer[1] = i;
                return [sum_tracker[nums[i]], i]
            }
            const complement = target - nums[i];
            // Add the complement to be the new number target be the key (the value in nums we want to find) and the value be the index of the current number used to produce the complement
            sum_tracker[complement] = i;
        }
        // if(answer[0] == null || answer [1] == null )
        return []; // doesnt tell anything about the case where none is found
        // answer.sort((a,b) => a-b);
        // return answer;
    }
}
