class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = new Map()

        for (const str of strs){
            const key = str.split("").sort().join("")

            if(!hash.get(key)){
                hash.set(key, [])
            }

            hash.get(key).push(str)
        }

        return Array.from(hash.values())
    }
}
