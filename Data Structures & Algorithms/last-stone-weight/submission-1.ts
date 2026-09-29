class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        // Since we have to pick the 2 heaviest Stones. We know that this must be a max heap bc, if this were min heap, in order to get largest we would need to compare all leaf

        const maxHeap = new MaxPriorityQueue();
        // set up the stones in a max heap
        for(let stone of stones){
            maxHeap.enqueue(stone);
        }
        // While its still possible for two stones to fight to the death
        while(maxHeap.size() > 1){
            // Remove two highest stones and reinstert the winner
            const stone1 = maxHeap.dequeue();
            const stone2 = maxHeap.dequeue();

            // if((stone1 - stone2) != 0){ // If both stones didn't tie
            maxHeap.enqueue(stone1 - stone2);
            // }
        }

        // return 0; // temp to test intellisense errors
        return maxHeap.front();
    }
}
