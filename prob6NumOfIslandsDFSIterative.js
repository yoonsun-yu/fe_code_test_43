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

    const gridLength = grid[0].length;

    for (let r = 0; r < grid.length ; r++) {
        for (let c = 0; c < gridLength; c++) {
            if (grid[r][c] === '1') {
                isLandsCount++;
                // 해당 육지와 연결된 모든 육지를 물로 바꾼다.
                // bfs(grid, r, c);
                dfs(grid, r, c);                
            }
        }
    }

    return isLandsCount;
};

function dfs(grid, row, col) {
    let stack = [];

    grid[row][col] = '0';
    stack.push(new Node(row,col));
 
    while(stack.length > 0) {
        let node = stack.pop();

        for (let direction of DIRECTIONS) {
            let r = node.row + direction[0];
            let c = node.col + direction[1];

             if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === '0') continue;

             grid[r][c] = '0';
             stack.push(new Node(r,c));
        }

    }

}
