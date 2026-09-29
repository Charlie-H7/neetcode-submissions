// Lets make our own heap :)

/* 
Idea: if we initialize our heap as a max Heap of the smallest
This must mean the root is the largest of the smallest k point distances
Therefore if a new point is smaller than the largest of the k points then 
    pq[1:] <= newPoint < root
YES!
*/

// Our Heap will be made using a bottom-top fixDown approach
class CoordinateMaxHeap {
    maxHeap: number[][]; // Maintained to be of size k
    k: number; // k <= points.length <= 1000

    distancePoint(point: number[]){
        return Math.sqrt((point[0]**2) + (point[1]**2))
    }
    // Helper function that returns if p1 is larger than p2
    p1LessP2(p1:number[], p2: number[]): boolean{
        return this.distancePoint(p1) < this.distancePoint(p2);
    }
    
    p1GreaterP2(p1:number[], p2: number[]): boolean{
        return this.distancePoint(p1) > this.distancePoint(p2);
    }

    constructor(nums: number[][], k){
        this.maxHeap = nums;
        this.k = k;
        // Loop over the first k elemets in nums and heapify them into maxHeap
        // for(let i = this.k - 1; i >= 0; i--){
        // Skip leaf nodes (max max efficiency)
        for(let i = Math.floor(this.k/2) - 1; i >= 0; i--){
            // console.log(this.maxHeap);
            // this.maxHeap.push(nums[i]); What the hell was i doing, im modifying in place
            this.fixDownMax(i);
        }
        // Update heap for the remaining elts in the nums
        for(let i = this.k; i < nums.length; i++){
            if(this.p1LessP2(this.maxHeap[i], this.maxHeap[0])){
                // Replace largest of smallest k with smaller candidate
                // fix down to maintain max heap
                this.maxHeap[0] = this.maxHeap[i];
                this.fixDownMax(0);
            }
        }
    }

    fixDownMax(i: number){
        // For the current idx of our heap, perform swap with children until children larger than self

        // While we haven't reached passed the end of the pq and there are accessible children
        while(2*i + 1 < this.k){
            let largestChildIdx = 2*i + 1; // left child of node i
            // check which of the children of node i is larger
            if(
                largestChildIdx + 1 < this.k
                && this.p1LessP2(this.maxHeap[largestChildIdx], this.maxHeap[largestChildIdx + 1])){
                    largestChildIdx++; // If largest child is right move idx
            }
            // No need to do more swaps if children are smaller than self (maintain max-heap)
            // if(this.maxHeap[i] > this.maxHeap[largestChildIdx])
            if(this.p1GreaterP2(this.maxHeap[i], this.maxHeap[largestChildIdx])){
                break;
            }
            // Do the swap
            [this.maxHeap[i], this.maxHeap[largestChildIdx]] = [this.maxHeap[largestChildIdx], this.maxHeap[i]];
            i = largestChildIdx;
        }
    }
}


class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */

   

    kClosest(points: number[][], k: number): number[][] {
        // const maxHeap = new maxPriorityQueue();
        const heap = new CoordinateMaxHeap(points, k);
        return heap.maxHeap.slice(0, k);

    }
}
