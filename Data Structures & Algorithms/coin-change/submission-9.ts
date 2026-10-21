class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        const dp = new Array(amount + 1).fill(Infinity);
        dp[0] = 0;
        for(let target = 1; target < dp.length; target++){
            for(let coin of coins){
                if(target - coin >= 0 && dp[target - coin] !== Infinity){
                    dp[target] = Math.min(dp[target - coin] + 1, dp[target]);
                }
            }
        }
        return (dp.at(-1) === Infinity) ? -1 : dp.at(-1);
    }
}
