class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): any {
        const freq = new Map()

        for (let num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1)
        }

        const sortedEntries = [...freq.entries()].sort((a, b) => b[1] - a[1])
        return sortedEntries.slice(0, k).map(([num]) => num)
    }
}
