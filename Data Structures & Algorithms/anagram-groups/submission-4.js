class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const group = new Map()

        for(let i = 0; i < strs.length; i ++){
            const signature = strs[i].split("").sort().join()

            if(!group.has(signature)){
                group.set(signature, [])
            }

            group.get(signature).push(strs[i])
        }

        return Array.from(group.values())
    }
}
