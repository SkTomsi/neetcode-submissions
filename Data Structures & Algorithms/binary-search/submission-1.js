class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let h = nums.length;

        do {
            const m = Math.floor(l + (h - l) / 2);
            const v = nums[m];

            console.log(m);

            if (v === target) {
                return m;
            } else if (v > target) {
                h = m;
            } else {
                l = m + 1;
            }
        } while (l < h);

        return -1;
    }
}
