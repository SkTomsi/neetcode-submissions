class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map()

        for(let i = 0; i < nums.length; i ++){
            const difference = target - nums[i]

            if(seen.has(difference)){
                return [i, seen.get(difference)]
            }

            seen.set(nums[i], i)
        }
    }
}
