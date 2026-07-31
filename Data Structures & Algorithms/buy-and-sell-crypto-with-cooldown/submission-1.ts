class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {

        // constraints: After selling we consider buy
        // reccurence
        // if profit from selling 


        // Recursive Question: maxProfit = What is the maximum profit I can achieve using the first 'i' prices

        // State (independent): 
            // Index for the day we are considering
            // If a stock was bought on day 'i'

        // dp[i] = The maximum profit I can achieve using the first [i] elts

        // The recursion
        /* 
            If I buy on day 'i'
        */
        
        // Base case;
            // day 0: market closed profit is 0
            // day 1: our only choice is to consider buying on first day
    // ------------------------------------------------------------------------------------ //
                // // offset of 2 for both for sentinel cases (recursion uses i-2)
                // const dp: number[] = new Array(prices.length + 1);
                // const dayChoices = new Array(prices.length + 1);

                // // base case
                // dp[0] = 0;
                // // dayChoices[0] = "h";

                // dp[1] = -prices[0];
                // dayChoices[1] = "b"
                // for(let i = 2; i < prices.length + 1; i++){
                //     // choose to buy if current prices is lower than yesterdays, and yesterday chose to buy
                //     if(prices[i] < prices[i-1] && dayChoices[i-1] === "b"){
                //         // update todays choice
                //         dayChoices[i] = "b"
                //         // you can't sell otherwise our profit goes down so we must choose to update our buy here
                //         dp[i] = dp[i-1] + prices[i-1] - prices[i]; // Undo the purchase from day before and consider buying today instead of on day i-1
                //         // Wait what if [1, 2, 3, 4, 5] -> [-1, 1, 1(hold), -3, 1] {should be ans=4}
                //     }
                //     // Choose to sell if either we 
                //         // 1. Bought yesterday and current price is higher than yesterdays

                //     else if(prices[i] > prices[i-1] && dayChoices[i-1] === "b"){
                //         dayChoices[i] = "s";
                //         dp[i] = dp[i-1] + prices[i]; // consider old max, we made profit wipee!
                //         // sell new stock OR consider something else I bet
                //     }
                //     // Need the max
                //     return 
                //     // Wait what if [1, 2, 3, 4, 5] -> [-1, 1, 1(hold), -3, 1] {should be ans=4} FAHHHHHHHHH
                //     // I do actually like the idea tho kinda
                // }

        // const profit = new Array(prices.length).fill(0);
        // Substates needed to decide profit
        // Let the following Arrays represent SUBSTATES on what the maximum price would be starting at index i given they were
            // not_holding, holding, or on cooldown starting on day i (suffix)
        const holding = new Array(prices.length).fill(0);
        const free = new Array(prices.length).fill(0);
        const cooldown = new Array(prices.length).fill(0);

        // Base cases: uhhhhhh lol
        // profit[0] = ;

        
        free[0] = 0; // Starting on day 0, by ending free means we dont have a stock on day 'i' but CAN buy tommorow
        holding[0] = -prices[0]; // starting index i by holding means that we must end day 'i' by holding a stock done by Buying a stock // can sell stock tomorrow 
        cooldown[0] = -Infinity; // Bruh its not even possible to be on cooldown for the first day

        // We loop over to get the information for 3 substates
        for(let i = 1; i < prices.length; i++){
            // uhhh wait im confused, I need to verify shit here
            // to be not holding I had to either be not holding already, or not on cooldown for current day

            // Following DFA
            
                // // Wait this method doesn't make sense for one reason, if we solely believe that holding[i] always gets its value from cooldown[i-1] the -Infinity, will always be passed around all three states Cooldown(-inf{i-1})->Hold(-inf{i})->NotHold(-inf{i+1})
                // // // Hold -> NotHold
                // // not_holding[i] = holding[i-1] + prices[i-1];
                // // // NotHold -> Cooldown
                // // cooldown[i] = not_holding[i-1]
                // // // Cooldown -> Hold
                // // holding[i] = cooldown[i-1] - prices[i]; // profit after cooldown - cost to be holding on this iter

                    //     // Wondering if the 2nd part for the sub dp's max should be self[i-2] and not -1
                    // // Hold -> NotHold
                    // not_holding[i] = Math.max(holding[i-1] + prices[i-1], not_holding[i-1]);
                    // // NotHold -> Cooldown
                    // cooldown[i] = not_holding[i-1]
                    // // Cooldown -> Hold
                    // holding[i] = Math.max(cooldown[i-1] - prices[i], holding[i-1]); // profit after cooldown - cost to be holding on this iter
            
            holding[i] = Math.max(free[i-1] - prices[i], holding[i-1]); // Buy todays from the path that lead to being free yesterday, or holding onto the stock from yesterday (whichever is more profitable)
            cooldown[i] = holding[i-1] + prices[i]; // Sell today
            free[i] = Math.max(cooldown[i-1], free[i-1]); // Get to from waiting a day from Cooldown OR you were already there at Free and you just decided to wait and do nothin
        }
        return Math.max(free.at(-1), cooldown.at(-1));  // Since ending the last day with having not sold a stock (holding[n]) we know that, that largest profit that ends with us holding stock cannot be the correct max;


    }
}
