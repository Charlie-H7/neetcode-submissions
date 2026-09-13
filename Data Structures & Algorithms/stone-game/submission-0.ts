class Solution {
    /**
     * @param {number[]} piles
     * @return {boolean}
     */
    stoneGame(piles: number[]): boolean {
        // // This problem can be done in 1d;
        // // ---- DECISION ---- //
        // // stoneGame(piles) -> is the result of wether A or B wins the game from piles

        // // The state - whose turn it is to grab
        // const aMax = 0;
        // const bMax = 0;
        // let player: boolean = true;
        // // const players: number[] = [1,2];
        // let i = 0;
        // let end_idx = piles.length - 1;

        // // Ok im starting to think that dp[i] is who is winning after the i'th pile is grabbed; not so its position based. but like yeah; because this isnt really any better lol im just calculating the max lmao; that way dp.at(-1) is the sol
        // // Dp who is winning by grabbing the i'th pile
        // const dp = new Array<boolean>(piles.length).fill(null); // this isn't really reliant
        // while (i < piles.length){ // bad
        //     if(piles[i] > piles[end_idx]){
        //         dp[i] = aMax + (player ?  piles[i] : 0) > bMax + (!player ? piles[i] : 0);
        //         player = !player;
        //         i += 1;
        //     }
        //     else{
        //         dp[end_idx] = aMax + (player ?  piles[end_idx] : 0) > bMax + (!player ? piles[end_idx] : 0);
        //         player = !player;
        //         end_idx -= 1;
        //     }
        //     // You see this problem feels weird because none of the sup-problems for tabulation really depend on eachother; so dp for this problem feels like a really inefficient use of dp
        // }

        // recursive question: stoneGame after playing optimally who wins

        // States: well there are 2 main states in the game either A or B takes a pile, so the state is 
            // The only way to tell who is winning is by deciding who has more after a pile is taken
            // So the state is the price difference between A and B after taking a pile
            // Or rather 2 ends of the pile, (The remaining range of the pile)

        // dp[i][j] = the maximum difference one player could achieve over the other

        // // Base cases: one of the 
        // const dp = new Array<number>(piles.length).fill(0).map(() => (new Array<number>(piles.length).fill(0)));
        
        // // Base case 
        // for()


    const n = piles.length;

    const dp: number[][] = Array.from(
        { length: n },
        () => Array(n).fill(0)
    );

    // Base case: one pile remaining
    for (let i = 0; i < n; i++) {
        dp[i][i] = piles[i];
    }

    // Solve increasingly larger intervals
    for (let length = 2; length <= n; length++) {
        for (let left = 0; left + length - 1 < n; left++) {
            const right = left + length - 1;

            const takeLeft =
                piles[left] - dp[left + 1][right];

            const takeRight =
                piles[right] - dp[left][right - 1];

            dp[left][right] = Math.max(takeLeft, takeRight);
        }
    }

    return dp[0][n - 1] > 0;

    }
}
