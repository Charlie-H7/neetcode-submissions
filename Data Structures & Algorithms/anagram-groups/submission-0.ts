class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        /* Aproach
        1. Make a string of the number of occurence in a string
        2. Create a key in each string that counts letter frequency in a string
        3. Store 
         */

        const groups = new Map<string, string[]>();

        for (const word of strs) {
            // Initialize key
            const count: number[] = Array(26).fill(0);

            for (const char of word){
                // Change each of the chars of the key
                count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
            }
            // Array.prototype.join() is a built-in method used to combine all elements of an array into a single string
            // Convert counts into a unique key
            const key = count.join("#");

            // Create group if necessary
            if (!groups.has(key)) {
                groups.set(key, []);
            }

            // Add the word
            groups.get(key)!.push(word);
        }
        return [...groups.values()];
    }
}
