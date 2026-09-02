class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const cell = board[row][col];
                if (cell === ".") continue;
                const boxId = Math.floor(row / 3) * 3 + Math.floor(col / 3);
                console.log(cell, boxId);

                const rowKey = `row:${row}:${cell}`;
                const colKey = `col:${col}:${cell}`;
                const boxKey = `box:${boxId}:${cell}`;


                if (
                    seen.has(rowKey) ||
                    seen.has(colKey) ||
                    seen.has(boxKey)
                ) {
                    return false;
                }

                seen.add(rowKey).add(colKey).add(boxKey);
            }
        }
        console.log(seen)
        return true
    }
}
