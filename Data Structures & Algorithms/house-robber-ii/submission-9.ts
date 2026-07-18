class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        // if(nums.length === 1) return nums[0];
        // if (nums.length === 2) return Math.max(nums[0], nums[1]);
        
        // // Create the dp table containing the best solution including the first house
        // const table_first_house: number[] = Array(nums.length - 1);
        // table_first_house[0] = nums[0];
        // // I need to make the 1st table house be the best choice to rob between the first houses
        // table_first_house[1] = Math.max(nums[1], nums[0]);

        // // Create the dp table containing the best solution including the last house
        // const table_last_house: number[] = Array(nums.length - 1);
        // table_last_house[0] = nums[1]; // Excluding the first house our base case starts at the first house
        // // table_last_house[1] = nums[2];
        // table_last_house[1] = Math.max(nums[2], nums[1]);

        // // This is to check for the best houses to rob among n-1 houses (choosing the first house over the last house)
        // for(let i=2; i < table_first_house.length; i++){
        //     table_first_house[i] = Math.max(table_first_house[i-2] + nums[i], table_first_house[i-1]);
        // }

        // for(let i = 2; i < table_last_house.length; i++){
        //     // table[2] => num[3]; i < nums.length; i at end loop -> nums.end; nums[i+1] breaks]; On top of this the dp_table isn't filed in for last elt
        //     // table_last_house[i]
        //     // const j = (i === nums.length) ? i : i;
        //     table_last_house[i] = Math.max(table_last_house[i-2] + nums[i+1], table_last_house[i-1]);
        // }

        // return Math.max(...table_first_house, ...table_last_house);

        //---------
        if (nums.length === 1) return nums[0];

        const robRange = (start: number, end: number): number => {
            let prevTwo = 0;
            let prevOne = 0;

            for (let i = start; i <= end; i++) {
                const current = Math.max(
                    prevOne,
                    prevTwo + nums[i]
                );

                prevTwo = prevOne;
                prevOne = current;
            }

            return prevOne;
        };

        return Math.max(
            robRange(0, nums.length - 2),
            robRange(1, nums.length - 1)
        );
    }
}
