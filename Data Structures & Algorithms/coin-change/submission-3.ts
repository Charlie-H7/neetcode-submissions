class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */

    // Knapsack - max value
    // Coin change - minimize items/list
    coinChange(coins: number[], amount: number): number {
        // HAHA this first attempt is like so terrible.
        // // Since this is coin change (optimization problem rather than path/#ways prob) DONT NEED sentinel
        //     // And dp[i]
        // // Goal get the minimum number of coins that would reach the target
        // // What we are trying to calculate: total value -> what we return by coinChange(i, target) (dp[i]). 
        // // let dp[i] be the minimum number of coins contributed toward the total by the first 'i' coins
        // let dp = new Array(coins.length + 1).fill(0);
        // // Base case
        // dp[0] = 0;

        // // recursion
        // for (let i = 1; i < coins.length; i++){
        //     // If the number of coins fits into the solution
        //     if(coins[i] <= dp[i-1]){
        //         dp[i] =  dp[i-1] + 1;
        //     }
        //     else {
        //         dp[i] = dp[i-1];
        //     }
        // }
        
        // const answ = Math.min(...dp);

        // return (answ === 0 ? -1 : answ)






        // Prefix solution - we can take as many coins as we want so idx doesnt really matter
        
        // Let coinChange(amount) be the minimum number of coins to make up to the amount target
        
        // State- What changes: the amount we are trying to make up
            // Not the coins as we can repeatedly take the same amount of coins as many times as we want

        // dp[amount] = Minimum number of coins to make up the target that must end at amount (think of like the equivalent of i lol) 
        // const dp: number[] = new Array(amount).fill(Infinity);
        const dp: number[] = new Array(amount + 1).fill(-1);
        
        // Base case: (prefix so base is at start)
        dp[0] = 0; // The minimum number of coins needed to make the amount of 0 is nothing (just dont grab)
        // Wait the base case should actually be 

        // The Choices
            // for Amount i
                // 
        for(let target = 1; target <= amount; target++){
            let prev_ans = Infinity;
            for(const coin of coins) {
                // if(dp[target-coin] !== -1)
                // If possible to take a coin such that appending coin at end allows you to make target, do it
                if(target-coin >= 0 && dp[target-coin] != -1) {
                    // dp[target] = dp[target-coin] + 1; // To explain this; if it is possible to build the target, by just tacking on a copy of coin(target-coin), the just add it
                    // break;
                    // prev_ans = dp[target-1] + 1
                    // Bug here can't let dp[i] be decided by dp[target] bc in the event that its not possible to make a target with a coin
                    dp[target] = Math.min(dp[target-coin] + 1, prev_ans); // The min of the last coin to make it, vs the current combo we dont break, We look for the choice of coin that leads us to the minimum number of coins used
                    prev_ans = dp[target];
                }
                // else // otherwise, its not possible {I mean I could just initialize it all as -1 an let that be handled by by itself in ca}
                    // dp[target] = Math.max(-1,);
                    // dp[target] = Infinity;
            }
            // If it went through the list of all coins and did not have a 
            // console.log(dp)
        }
        return dp.at(-1) === -1 ? -1 : dp.at(-1);
        // use a prev_min ans; and take that as dp?[target]?
    }
}
