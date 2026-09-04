class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            if (seen.has(complement)) {
                return [i, seen.get(complement)];
            }

            seen.set(nums[i], i)
        }

    }
}
