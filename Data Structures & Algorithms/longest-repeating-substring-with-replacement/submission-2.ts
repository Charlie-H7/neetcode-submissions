class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let l = 0;
        let best = 0;
        const freq = new Map();
        let maxFreq = 0;
        

        // Loop over the array as the right end of our sliding window
        for(let r = 0; r < s.length; r++) {
            freq.set(s[r], (freq.get(s[r]) ?? 0) + 1);

            maxFreq = Math.max(
                maxFreq,
                freq.get(s[r])!
            );
            // if the size of our window (r - l + 1) - maxFreq
            if((r - l + 1) - maxFreq > k) {
                freq.set(s[l], freq.get(s[l]) - 1);
                l++;
            }
            best = Math.max(best, r - l + 1);
        }
        return best;
        // -------------- //
        // let l = 0;
        // let r = 0;
        // let kCopy = k;
        // let best = 0;
        // let prevLetter = s[0];


        // // While we haven't reached the end of the string;
        // while(r < s.length){
        //     if(s[r] !== prevLetter){
        //         if(kCopy == 0){
        //             best = Math.max(best, r-l);
        //             prevLetter = s[r];
        //             // l = r + 1;
        //             l = r;
        //         }
        //         kCopy--;
        //     }
        //     r++;
        // }

        // return Math.max(best,r-l);
    }
    /*
                
            // Slide the window
            // if r is zero or same as prev letter
            if(s[r] === prevLetter || prevLetter === ""){
                console.log("hi");
                // Add the letter and slide the window
                best = Math.max(r-l, best);
                prevLetter = s[r];
                r++;
            }
            else{ // If not a match)
                // console.log(`dupe detected at ${s[r]} idx: ${r}`);
                // Choose to replace a char to repeat
                if(kCopy > 0){ // if can replace
                    kCopy--;
                    r++;
                }
                else { // Cant replace
                    kCopy = k;
                    best = Math.max(r-l, best);
                    console.log(`dupe detected at ${s[r]} idx: ${r}`);
                    // Reset to next potential repeating char
                    r++;
                    l = r;
                }
            }
    */
}