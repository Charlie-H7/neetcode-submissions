class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const charSet = new Set<string>();
        let bestLen = 0;
        let l = 0;  // left and right ends of window
        let r = 0; // The current char we are considering

        // Loop over the window
        while(r < s.length){
            // if(charSet.has(s[r])){ // If there is a dupe (i dont think this is really needed now that i think about it
            // I think the while loop has that handled already)
            
            // We need to move the left ptr until there is no duplicate within the window
            while(charSet.has(s[r])){
                // go throught l and remove all chars in that window
                charSet.delete(s[l]);
                l++;
            }
            // }
            // if there is no duplicate add to window and move r 
            charSet.add(s[r]); // lol forgot to add to window
            bestLen = Math.max(r - l + 1, bestLen);
            r++; // Slide the window to the right one.
        }
        return bestLen;
    // ------------ //
        // let alphabet = new Array(26).fill(0); // This is the container that tells us if there is a duplicate {good try this would work under the constraints that it was a-z but not this case for all ascii}
        
        // let bestLen = 0;

        // let l = 0;  // left and right ends of window
        // let r = 0; // The current char we are considering

        // // Loop over the window
        // while(r < s.length){
        //     // console.log(alphabet["z".charCodeAt(0) - s.charCodeAt(r)]);
        //     if(alphabet["z".charCodeAt(0) - s.charCodeAt(r)]){ // If there is a dupe
        //         // console.log(`dupe detected on ${r}`);
        //         // We need to move the left ptr until there is no duplicate within the window
        //         while(alphabet["z".charCodeAt(0) - s.charCodeAt(r)]){
        //             // go throught l and remove all chars in that window
        //             alphabet["z".charCodeAt(0) - s.charCodeAt(l)] = 0;
        //             l++;
        //         }
        //     }
        //     // if there is no duplicate add to window and move r 
        //     alphabet["z".charCodeAt(0) - s.charCodeAt(r)] = 1; // lol forgot to add to window
        //     bestLen = Math.max(r - l + 1, bestLen);
        //     r++; // Slide the window to the right one.
        // }
        // return bestLen;
    }
}
