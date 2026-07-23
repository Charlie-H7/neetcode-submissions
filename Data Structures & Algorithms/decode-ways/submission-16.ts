class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {
        // NEW
        const dp = new Array(s.length + 1).fill(0);
        
        dp[0] = 1;
        dp[1] = s[0] === "0" ? 0 : 1;

        for(let i = 2; i < dp.length; i++) {
            // choices
            // We add up all ways to decode by pairing up s[i-1] and s[i] + all the ways that leave [i] as its own string
            // The only way this happens is if s[i-1] + s[i] is greater than 0 and less than [27] (as these are valid encoding for pairs)
            console.log((s[i-2] + s[i-1]));
            //if pair valid
            // if ((s[i-2] + s[i-1]) > "0" && (s[i-2] + s[i-1]) < "27"){
            if ((s[i-2] + s[i-1]) >= "10" && (s[i-2] + s[i-1]) <= "26"){
                dp[i] += dp[i-2]
            }
            // if (single digit valid)
            if (s[i - 1] !== "0") {
                dp[i] += dp[i-1];
            }

            // // if ((s[i-2] + s[i-1]) > "0" && (s[i-2] + s[i-1]) < "27"){
            // if ((s[i-2] + s[i-1]) > "10" && (s[i-2] + s[i-1]) < "27"){
            //     dp[i] = dp[i-1] + dp[i-2];
            //     console.log(`here at idx ${i}`);
            //     console.log((s[i-1] + s[i]));
            // }
            // else {
            //     dp[i] = dp[i-2];
            // }
        }
        return (dp.at(-1));
        // NEW



















        // // This just feels like stair climing with extra steps

        // // const dp_table: number[] = new Array(s.length);

        // // // s.length === 1 ? (return Number(s[0])) : return null;
        // // // if (s[0] != "0") dp_table[0] = 0;
        // // s[0] === "0" ? dp_table[0] = 0 : dp_table[0] = 1;
        // // if(s.length === 2 && s > "26") return 1;
        
        // // // Input:

        // // // This fails because currently I'm counting '06' as a valid number for index i=1, but it says to toss this
        // // // s="06"
        // // // Your Output:
        // // // 1
        // // // Expected output:
        // // // 0
        // //     // for(let i = 1; i < s.length; i++){
        // //     //     if(s[i-1] !== "0" && s[i] !== "0") dp_table[i] = dp_table[i-1] + 2;
        // //     //     else if (s[i-1] === "0" && s[i] !== "0") dp_table[i] = dp_table[i-1] + 1; // Since I want to now lose even if i encounter a 0 on the index before i; just. lump this case with the else and remove this line
        // //     //     else dp_table[i] = dp_table[i-1];
        // //     // }
        // // // Okay I actually have to check that s[i-1] + s[i] > 26 bc in that case, it should only count as one
        // // // The 0 in "2101" forces the 1 before it to combine with it. They have to become 10. (ddn't really mention this so thanks problem)
        // //     // for(let i = 1; i < s.length; i++){
        // //     //     if(s[i-1] !== "0" && s[i] !== "0") dp_table[i] = dp_table[i-1] + 1;
        // //     //     else dp_table[i] = dp_table[i-1];
        // //     // }

        // //     // for(let i = 1; i < s.length; i++){
        // //     //     if(s[i-1] !== "0" && s[i] !== "0") dp_table[i] = dp_table[i-1] + 1;
        // //     //     else dp_table[i] = dp_table[i-1];
        // //     // }

        // // for(let i = 1; i < s.length; i++){
        // //     if(s[i-1] !== "0" && s[i] !== "0") dp_table[i] = dp_table[i-1] + 1;
        // //     else dp_table[i] = dp_table[i-1]; // to undo tha case mentioned in comment below
        // //     // else if (s[i] === "0") dp_table[i] = dp_table[i-1] - 1;
        // // }
        // // // Theres nothing wrong with including a 0 in as a pair @ i, UNTIL i is != 0 and i - 1 = 0 forcing i-2 to to become just one pair

        // // return (dp_table.at(-1))

        // //--- New attempt ---//
        // // Let dp[i] = the number of ways to decode the first 'i' characters
        // const dp = new Array(s.length + 1).fill(0);

        // // --- offset --- //
        // // index:  0   1   2
        // //         2   2   6


        // // dp:
        // // index:  0   1   2   3
        // //         ""  2  22  226
        // // Base case: The number of ways to decode first string is 1 itself given its not a 0
        // // table[0] = s[0] === "0" ? 0 : 1;
        // dp[0] = 1; // Sentinel case
        // dp[1] = s[0] === "0" ? 0 : 1;

        // // Recursion
        // // Rules: 
        //     // There are two cases: (the number of ways to decode string i-1 leaving i as a single) + (number of ways to decode string i-2 {pairing i-1 + i-2})
        //     // 1. if [i2]
        // for(let i = 2; i < dp.length; i++){
        //     // Because of the offset s[i-1] = curr_letter
        //     // add the number of ways from the last one
        //     if(s[i - 1] !== "0") { // s[i - 1] = curr letter -> dp[i]; so just 0 is an invalid char and we dont count it
        //         dp[i] += dp[i-1];
        //     }
        //     // add the number of ways to last two
        //     // Use the last two digits together
        //     const twoDigit = Number(s.substring(i - 2, i));

        //     if (twoDigit >= 10 && twoDigit <= 26) {
        //         dp[i] += dp[i-2];
        //     }
        // }
        // return dp.at(-1);




        // //--- New attempt ---//

        // // ----- Learned ----- //

        // // const n = s.length;
        // // const dp = new Array(n + 1).fill(0);

        // // // Empty string has one way to decode
        // // dp[0] = 1;

        // // // First character
        // // dp[1] = s[0] === "0" ? 0 : 1;

        // // for (let i = 2; i <= n; i++) {
        // //     // Use the current digit by itself
        // //     if (s[i - 1] !== "0") {
        // //         dp[i] += dp[i - 1];
        // //     }

        // //     // Use the last two digits together
        // //     const twoDigit = Number(s.substring(i - 2, i));

        // //     if (twoDigit >= 10 && twoDigit <= 26) {
        // //         dp[i] += dp[i - 2];
        // //     }
        // // }

        // // return dp[n];

    }
}
