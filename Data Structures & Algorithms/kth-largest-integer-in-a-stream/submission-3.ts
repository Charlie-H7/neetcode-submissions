class KthLargest {
    // Class members
    k: number;
    nums: number[];

    fixDownMin(i: number): void{
        const heapSize = Math.min(this.k, this.nums.length);
        // Loop over the array while the
        // while(2*i + 1 < this.nums.length){
        while(2*i + 1 < heapSize){
            let smallestChildIdx = 2*i + 1;
            // if(smallestChildIdx + 1 < this.nums.length && this.nums[smallestChildIdx] > this.nums[smallestChildIdx + 1]){
            // if(smallestChildIdx + 1 < this.k && this.nums[smallestChildIdx] > this.nums[smallestChildIdx + 1]){
            if(smallestChildIdx + 1 < heapSize && this.nums[smallestChildIdx] > this.nums[smallestChildIdx + 1]){
                smallestChildIdx++;
            }
            if(this.nums[i] <= this.nums[smallestChildIdx]){ // If node at index is smaller or same than children node leave alone
                break;
            }
            const tempChild = this.nums[smallestChildIdx];
            this.nums[smallestChildIdx] = this.nums[i];
            this.nums[i] = tempChild;
            i = smallestChildIdx;
        }
    }

    // This function is used in add, when our heap size this.nums.length is smaller than k
    fixUp(i: number){
        
        while(Math.floor((i-1) / 2) >= 0){ // While parent is accessible
            const parentIdx = Math.floor((i-1) / 2);
            if(this.nums[parentIdx] > this.nums[i]){
                let parentTemp: number;
                parentTemp = this.nums[parentIdx];
                this.nums[parentIdx] = this.nums[i];
                this.nums[i] = parentTemp;
                i = parentIdx;
            }
            else {
                break;
            }
        }
    }

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.nums = nums;

        // Need to loop over the first k elements to create; we will do bottom up heapify
        for(let i = this.k - 1; i >= 0; i--){
            this.fixDownMin(i);
        }
        // Loop over remaining nums
        for(let i = this.k; i < this.nums.length; i++){
            if(this.nums[i] > this.nums[0]){ // If the number is bigger than the smallest replace root and fix down
                // replace
                this.nums[0] = this.nums[i];
                this.fixDownMin(0);
            }
        }

    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        if(this.nums.length < this.k){
            this.nums.push(val);
            this.fixUp(this.nums.length - 1);
        }
        else if(this.nums[0] < val){
            this.nums[0] = val;
            this.fixDownMin(0)
        }
        return this.nums[0];
    }
}
