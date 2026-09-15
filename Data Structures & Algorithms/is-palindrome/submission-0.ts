class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumeric(c: string) {
        if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')){
            return true;
        }
        return false;
    }

    isPalindrome(s: string): boolean {

        let left: number = 0;
        let right: number = s.length - 1;
        // s.strip(); Well it aint python; plus this is O(n) time since you would need to check whole str (slower than my alg lol)
        while (left < right){
            while(left < right && !this.isAlphanumeric(s[left])){
                left++;
            }
            while(left < right && !this.isAlphanumeric(s[right])){
                right--;
            }
            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false;
            }
            left++;
            right--;
        }
        return true;
        // --- IGNORE BELOW --- //
        // while (left !== right){ // This is no longer the right conditional; as looping in a 
        // // while (left <= right){
        //     // Case 1: Pointer 1 is comparing a white-space to right char and vice versa
        //     // Move over corresponding pointer until we can actually compare 2 chars
        //     while(s[left] === " "){
        //         left++;
        //     }
        //     while(s[right] === " "){
        //         right--;
        //     }
        //     if(s[left].toLowerCase() !== s[right].toLowerCase()){
        //         console.log(`left ${left}, right${right}`)
        //         return false;
        //     }
        //     // if(s[left] === " ") {
        //     //     left++;
        //     // }
        //     // if(s[right] === " ") {
        //     //     right--;
        //     // }
        //     // if(s[left].toLowerCase() !== s[right].toLowerCase()){
        //     //     return false;
        //     // }
        //     left++;
        //     right--;

        // }
        // return true;
    }
}
