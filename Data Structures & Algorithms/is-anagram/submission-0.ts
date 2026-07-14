class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // Since in this problem we aer only constrained to lower case English alphabet, we can throw all of the letter occurences into an object/hashmap as it will be bounded by the number of characters in the English language. Hence O(1)
        if(s.length != t.length)
            return false
        let string_freq: Record<string, number> = {}
            // for(let i = 0; i < s.length; i++) {
            //     string_freq[s[i]] = (string_freq[s[i]] ?? 0) + 1 // initialize the string_freq to be either curr count + 1 or initialize it
            // }
        for (const ch of s) {
            string_freq[ch] = (string_freq[ch] ?? 0) + 1; 
        }

        // Now that I initialized the map I want to check if string t has the same freq numbers as  's'
            // for (let i = 0; i < t.length; i++) {
            //     string_freq[t[i]] = (string_freq[t[i]] ?? 0) - 1; // strings that occur only in string occur in 't' or more in t than s will be neg
            // }
        for (const ch of t) {
            if(!(ch in string_freq)) {
                return false;
            }
            // If it does appear lower its counter
            string_freq[ch] -= 1;
            // ummm nah this is just checking if t is a substring anagram, I could verify it by guarunteeing they are the same len
            // Counter example s="ab" t="aa" -> result is true; however; we get string_freq = {a:-1; b:1}
            if(string_freq[ch] < 0){
                return false; // This would mean that a char in t appears more times than in 's'
            }
        }
        return true;


        // --- BAD --- //
        // for(let i = 0; i < s.length; i++){
        //     tk[s[i]] = 0; // Initialize each char to 0 at first, that way we know which chars exist in a string
        // }        
        // if(s.length != t.length) {
        //     return false;
        // }
        // // Record the frequency of occuring chars in a string
        // for(let i = 0; i < s.length; i++){
        //     tk[s[i]] += 1;
        // }
        // // now loop over each letter in 't' and track which still exist
        // for(let i = 0; i < t.length; i++) {
        //     tk[t[i]] -= 1;
        // }
        // // Objects don't have length in ts
        // for(let i = 0; i < tk.length; i++){
        //     if
        // }
    }
}
