class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {
        // This just feels like stair climing with extra steps

        // const dp_table: number[] = new Array(s.length);

        // // s.length === 1 ? (return Number(s[0])) : return null;
        // // if (s[0] != "0") dp_table[0] = 0;
        // s[0] === "0" ? dp_table[0] = 0 : dp_table[0] = 1;
        // if(s.length === 2 && s > "26") return 1;
        
        // // Input:

        // // This fails because currently I'm counting '06' as a valid number for index i=1, but it says to toss this
        // // s="06"
        // // Your Output:
        // // 1
        // // Expected output:
        // // 0
        //     // for(let i = 1; i < s.length; i++){
        //     //     if(s[i-1] !== "0" && s[i] !== "0") dp_table[i] = dp_table[i-1] + 2;
        //     //     else if (s[i-1] === "0" && s[i] !== "0") dp_table[i] = dp_table[i-1] + 1; // Since I want to now lose even if i encounter a 0 on the index before i; just. lump this case with the else and remove this line
        //     //     else dp_table[i] = dp_table[i-1];
        //     // }
        // // Okay I actually have to check that s[i-1] + s[i] > 26 bc in that case, it should only count as one
        // // The 0 in "2101" forces the 1 before it to combine with it. They have to become 10. (ddn't really mention this so thanks problem)
        //     // for(let i = 1; i < s.length; i++){
        //     //     if(s[i-1] !== "0" && s[i] !== "0") dp_table[i] = dp_table[i-1] + 1;
        //     //     else dp_table[i] = dp_table[i-1];
        //     // }

        //     // for(let i = 1; i < s.length; i++){
        //     //     if(s[i-1] !== "0" && s[i] !== "0") dp_table[i] = dp_table[i-1] + 1;
        //     //     else dp_table[i] = dp_table[i-1];
        //     // }

        // for(let i = 1; i < s.length; i++){
        //     if(s[i-1] !== "0" && s[i] !== "0") dp_table[i] = dp_table[i-1] + 1;
        //     else dp_table[i] = dp_table[i-1]; // to undo tha case mentioned in comment below
        //     // else if (s[i] === "0") dp_table[i] = dp_table[i-1] - 1;
        // }
        // // Theres nothing wrong with including a 0 in as a pair @ i, UNTIL i is != 0 and i - 1 = 0 forcing i-2 to to become just one pair

        // return (dp_table.at(-1))

        const n = s.length;
        const dp = new Array(n + 1).fill(0);

        // Empty string has one way to decode
        dp[0] = 1;

        // First character
        dp[1] = s[0] === "0" ? 0 : 1;

        for (let i = 2; i <= n; i++) {
            // Use the current digit by itself
            if (s[i - 1] !== "0") {
                dp[i] += dp[i - 1];
            }

            // Use the last two digits together
            const twoDigit = Number(s.substring(i - 2, i));

            if (twoDigit >= 10 && twoDigit <= 26) {
                dp[i] += dp[i - 2];
            }
        }

        return dp[n];

    }
}
