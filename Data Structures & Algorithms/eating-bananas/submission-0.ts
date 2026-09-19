class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        // SO the idea is to make a binary search over the different speeds rather than the array itself.

        // Rather than performing a binary search over the data structure, perform a binary search on the solution
        let l = 1; // Starts at 1 because its not possible to eat 0 bananas per hour
        // let r = h;
        let r = Math.max(...piles);

        let best = 0;

        while(l <= r){
            // let l and r be the range of the potential eating speed h.
            // The idea is to make the eating speed be the midpoint of the binary search. 
            // It should ne the same logic as before where the main calculation of how many hours are needed to eat a pile is Math.cieling(piles[i] / midpoint) (current `h` being the current speed being checked)
            
            const m = l + Math.floor((r - l) / 2); // Hold the midpoint of the possible bananas to eat per hour.
            let totHoursSpeedM = 0;
            // Now we need to see how man hours total we need with the current eating speed `m` 
            
            // Loop over each pile in piles and check with the current eating speed `m` how many hours it takes
            for(let bananas of piles){
                totHoursSpeedM += Math.ceil(bananas / m);
            }
            // If the number of hours needed to eat bananas at speed m exceeds the alotted time h; move the range appropriately
            if(totHoursSpeedM > h){ // whoops need to flip it
                // r = m - 1;
                l = m + 1;
            }
            else{
                // l = m + 1;
                r = m - 1;
                // best = Math.min(best, totHoursSpeedM);
            }
        }
        // return best;
        return l; // L represent the lowest work speed that works as we defined the search


        // ---------- //
        // // So I know I would need to sort the piles in increasing order
        // piles.sort((a,b) => a - b)
        // //number of piles that must be eaten per hour
        // const pph = piles.length/h;
        // const extraHours = piles.length - h;
        
        // let l = 0;
        // let r = piles.length - 1;
        // let hCount = 0;

        // // while(hCount <= h){
        //     // Lets assume we have a midpoint in a certain array, well what does the max in each subdivision represent?
        //     // Well for piles[n] it represents eating the highest # banana in the piles, and the LHS is the number of bananas in the LHS. 
        //     // We also know that if h 

        //     // wait wait wait, 
        //         // So lets assume that the 

            
        // // }
        // if(h === piles.length){
        //     return piles[piles.length - 1];
        // }
        // else{
        //     let optimalPosition = (h - piles.length) % piles.length
        //     return piles[optimalPosition];
        // }

        // return null;
    }
}
