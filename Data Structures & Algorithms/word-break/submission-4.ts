class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        const dp = new Array<boolean>(s.length + 1).fill(false);
        // base case
        dp[0] = true;


        // const dp = new Array<boolean>(s.length);
        // // base case // hmmm, if i use sentinel. it doesn't make sense to loop over when T, since why wouldnt I just loop from where 0
        // // WAIT NO I WOULD LOOP ON THE ONE AFTER THAT
        // dp[0] = true;

        // Better recursive question -> 
            // - = Can I successfully segment s[i...end] ? 
                // {Wait this makes me think that if our target is the segmentation of s; we should iterate over each string in the word dict first}

        // State: current index -> Can I successfully break the REST of the string from i onwards
            // -- dont think of like segment ending at i

        // If the recursive question is
            // Can I segment s[i...]
        // then the return value is simply
            // true
            // or
            // false

        // // Loop over the table
        // for(let i = 0; i < s.length; i++){
        //     // Base case
        //     if (i === s.length) return true;
            
        //     dp[i] = 
        // }

        // Loop over each potential string in the word dict, and get the words that start in s[i] to see which we can segment
        // // for (let i = 0; i < wordDict.length; i++){ // O(t)
        //     for(const [i, word] of wordDict.entries())
        //         let substring = "";
        //         // Loop over string
        //         for(let j = 0; j < s.length; j++){ // O(n)
        //             // Check if the string starting at i (and onward {building the unknown lol})
        //             // find for each possible substring (this feels to asymptotically large O(n) * find() -> worst case O(n*m) hmmm)
                    
        //         }
        //     }
        for(let i = 0; i < s.length; i++){
            const i_offset = i + 1;
            if(dp[i_offset - 1] === true){ // The last idx, is the ending index of a segment (our current segment could be the start of a new word)
                for(const [j, word] of wordDict.entries()){
                    // For each letter we check if they equate eachother, make i cover from the start of the string segment (i) to i + word.length
                    if((s.substring(i, i + word.length)) === word){ // substring() end excluded
                        // If match is found then we would want to return true, from start of i to the end of range
                        // dp.range(start,end).fill(true)
                        // ret true
                        dp[i + word.length] = true;
                        console.log(`here at idx ${i}`)
                    } 
                    // otherwise we continue to the next word
                }
            }
            // you see I really like this idea, but if s = "cats..." and word dict; had ["cat", "cats"] -> then i wouldn't recognize cats. 
        }
        // After all of this, if the last elt in dp is true, return true. As this means that there was a path such some substring of s (i:end) exists in wordDict
        console.log(dp)
        return dp.at(-1);
    }

}
