class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let l = 0;
        let r = 0;
        let best: number = 0
        // We need a frequency list otherwise we was have to loop over s[l:r] to make sure what we 
        const freqWindow = new Map();

        // let r = s.length - 1;

        // while(l < r){
        while(r < s.length){
            if(freqWindow.has(s[r])){
                freqWindow.delete(s[l]);
                l++;
            }
            else {
                freqWindow.set(s[r], (freqWindow.get(s[r]) ?? 0) + 1);
                // best = best > (r - l) ? best : r - l + 1;
                best = Math.max(r - l + 1, best);
                r++;
            }
        }
        return best;
        // while(r < s.length){
        //     !freqWindow.has(s[r]) ? (
        //         freqWindow.set(s[r], (freqWindow.get(s[r]) ?? 0) + 1),
        //         r++
        //     ) : (
        //         while(freqWindow.has(s[r])){
        //             freqWindow.delete(s[r]);
        //             l++;
        //         }
        //     )
        // }
    }
}
