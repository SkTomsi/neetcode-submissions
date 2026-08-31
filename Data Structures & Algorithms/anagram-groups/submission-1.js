class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = new Map()

        for(const str of strs){
            const count = new Array(26).fill(0)

            for(const char of str){
                const index = char.charCodeAt(0) - 97
                count[index]++
            }

            const key = count.join("#")

            if(!hash.get(key)){
                hash.set(key, [])
            }

            hash.get(key).push(str)
        }

        return Array.from(hash.values())
    }
}
