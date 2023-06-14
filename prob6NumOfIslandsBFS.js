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

    // 그리드 컬럼 수
    const gridLength = grid[0].length;

    // 전체 그리드를 한번씩 확인
    for (let r = 0; r < grid.length ; r++) {
        for (let c = 0; c < gridLength; c++) {

            // 땅을 발견한다면?
            if (grid[r][c] === '1') {
                isLandsCount++;
                // 해당 육지와 연결된 모든 육지를 물로 바꾼다.
                bfs(grid, r, c);                
            }
        }
    }

    return isLandsCount;
};

function bfs(grid, row, col) {

    let queue = [];

    queue.push(new Node(row, col));

    // 발겨된 땅의 정보를 물로 바꿈
    grid[row][col] = '0';

    while(queue.length > 0) {
        let node = queue.shift();

        // 상하좌우를 다 살펴야 한다. 디렉션을 만드는 이유.
        for(let dir of DIRECTIONS) {
            let r = node.row + dir[0];
            let c = node.col + dir[1];

            // 상하좌우가 그리드 범위를 벗어난다면?
            // 상하좌우가 물이라면?
            if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === '0') continue;

            // 섬일 경우 큐에 넣는다.
            queue.push(new Node(r,c));
            grid[r][c] = '0';
        }
    }
}