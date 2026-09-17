class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let u = 0;
        let d = matrix.length - 1;
        let l = 0;
        let r = matrix[0].length - 1;

        while(u <= d){
            let mRow = u + Math.floor((d - u) / 2);

            // if(target > matrix[mRow][0]){
            if(target > matrix[mRow][(matrix[mRow].length) - 1]){
                u = mRow + 1;
            }
            // else if(target < matrix[mRow][(matrix[mRow].length) - 1]){
            else if(target < matrix[mRow][0]){
                d = mRow - 1;
            }
            else{ // The target is in the range for this given row
                // Perform a binary search on this row, establishing midpoint of ru

                while(l <= r){
                    let mCol = l + Math.floor((r - l) / 2);
                    // console.log(mRow,mCol, l, r);
                    if(target > matrix[mRow][mCol]){
                        l = mCol + 1;
                    }
                    else if(target < matrix[mRow][mCol]){
                        r = mCol - 1;
                    }
                    else{
                        return true;
                    }
                }
                return false;
            }
        }
        return false;

        // // idea binary search on each row to get what row it would belong in; then when found binary search the row
        // let l = 0;
        // let u = 0;
        // let r = matrix[0].length - 1;
        // let d = matrix.length - 1;
        // let mRow = u + Math.floor((d - u) / 2);
        // let mCol = l + Math.floor((r - l) / 2);

        // while(u <= d){ // we want to still check for if there is one row left
        //      // if the target is smaller than first elt (smallest elt) then in first m rows
        //     // matrix[m].at(0) > target ? d = m - 1 : u = m + 1;
        //     if(matrix[mRow].at(0) > target){
        //     // else if(matrix[mRow].at(0) > target){
        //         d = mRow - 1;
        //     }
        //     else if(matrix[mRow].at(-1) < target){
        //     // else if(matrix[mRow].at(-1) < target){
        //         u = mRow + 1;
        //     }
        //     else{
        //         u = d = mRow;
        //     }

        //     // After we get the correct new interval update the midpoint
        //     mRow = u + Math.floor((d - u) / 2);
        //     console.log(mRow,u,d)
        //     // console.log(mRow);
        //     // Search each row
        //     if(u == d){ // If a potential row is found
        //         while(l <= r){
        //             // matrix[mRow].at(mCol) > target ? r = mCol - 1 : l = mCol + 1;
        //             if(matrix[mRow][mCol] > target){
        //                 r = mCol - 1;
        //             }
        //             else if(matrix[mRow][mCol] < target){
        //                 l = mCol + 1;
        //             }
        //             else{
        //                 if(matrix[mRow][mCol] === target){
        //                     return true;
        //                 }
        //                 else{
        //                     return false;
        //                 }
        //             }
        //             mCol = l + Math.floor((r - l) / 2);
        //         }
        //     }
        // }

        // // if(matrix[mRow][mCol] === target){
        // //     return true;
        // // }
        // return null;
    }
}
