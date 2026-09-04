class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const group = new Map()

        for(let i = 0; i < strs.length; i ++){
            const sig = strs[i].split("").sort().join()

            if(!group.has(sig)){
                group.set(sig, [])
            }

            group.get(sig).push(strs[i])
        }

        return [...group.values()]
    }
}
