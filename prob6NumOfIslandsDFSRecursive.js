// 상, 하, 좌, 우
const DIRECTIONS = [[-1,0],[1,0],[0,-1],[0,1]]

class Node {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    let isLandsCount = 0;

    // grid를 스택에 전달 하지 않기 위해 함수 내부에 생성
    function dfs(row, col) {

        // 조건을 먼저 명시 
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === '0') {
            return;
        }

        grid[row][col] = '0';

        for (let direction of DIRECTIONS) {
            dfs(row+direction[0], col+direction[1]);
        }
    }

    const gridLength = grid[0].length;

    for (let r = 0; r < grid.length ; r++) {
        for (let c = 0; c < gridLength; c++) {
            if (grid[r][c] === '1') {
                isLandsCount++;
                // 해당 육지와 연결된 모든 육지를 물로 바꾼다.
                dfs(r, c);                
            }
        }
    }

    return isLandsCount;
};
