class TimeMap {
    // keyStore: Map<string, Array<number, string>> // Declare class vars
    keyStore: Map<string, [number, string][]> // Declare class vars
    // keyStore: Map<string, Record<number, string>>; // Declare class vars
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        // Since each key can have different timestamps, that means that we need to like 
        // this.keyStore.set(key, new Record(timestamp, value));
        // this.keyStore.set(key, this.keyStore.has(key) ? this.keyStore.get(key).push([timestamp, value]) : [[timestamp, value]]);
            // GOOD idea but [...Arr_extend, val] copies the Arr_extend to a new array, this would make set work in O(n) time
        // this.keyStore.set(key, this.keyStore.has(key) ? [...this.keyStore.get(key),[timestamp, value]] : [[timestamp, value]]); // 
        // this.keyStore.set(key, this.keyStore.getOrInsert(key, []));

        // this.keyStore.set();
        if(this.keyStore.has(key)){
            this.keyStore.get(key).push([timestamp, value]); // .get returns a reference to the array
        }
        else{
            this.keyStore.set(key, [[timestamp, value]]); // If the key doesnt exist yet make the key
        }
        // console.log("init done");
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        // in order to do the following
        let l = 0;
        // let r = this.keyStore.get(key)
        // let r = this.keyStore.has(key) ? this.keyStore.get(key).length - 1 : null;
        let r: number;
        let mapArray: Array<[number, string]>;
        if(this.keyStore.has(key)){
            mapArray = this.keyStore.get(key); // reference of arr
            r = mapArray.length - 1;
        }
        else{
            return "";
        }

        while(l <= r){ // <= because we want to consider the last one as an option
            const m = l + Math.floor((r - l) / 2);

            // Since the timestamps are in sorted ascending order we can do a binary search on the target
            if(mapArray[m][0] < timestamp){
                l = m + 1;
            }
            else if(mapArray[m][0] > timestamp){
                r = m - 1;
            }
            else{
                // console.log("huh")
                return mapArray[m][1];
            }

        }
        return r >= 0 ? mapArray[r][1] : "";
    }
}
