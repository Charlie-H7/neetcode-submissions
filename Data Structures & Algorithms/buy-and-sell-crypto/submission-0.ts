class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let bestBuy = Infinity;
        let bestProfit = -Infinity;
        
        for(let i = 0; i < prices.length; i++){
            // For a given day we must grab the lowest price to buy at
            if(prices[i] < bestBuy){
                bestBuy = prices[i];
            }
            else { // We didn't buy this day so we may choose to sell
                bestProfit = Math.max(-bestBuy + prices[i], bestProfit);
            }
        }
        if(bestProfit < 0){
            return 0;
        }
        else{
            return bestProfit;
        }
    }
}
