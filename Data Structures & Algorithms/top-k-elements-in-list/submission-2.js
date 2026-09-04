class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        const bucket = Array.from({ length: nums.length + 1 }, () => []);

        for (let n of nums) {
            freq.set(n, (freq.get(n) || 0) + 1);
        }

        for (let [key, value] of freq) {
            bucket[value].push(parseInt(key));
        }

        const res = [];
        for (let i = bucket.length - 1; i > 0; i--) {
            for(let n of bucket[i]){
                res.push(n)
                if(res.length === k){
                    return res
                }
            }
        }
    }
}
