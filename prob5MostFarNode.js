function solution(n, edge) {

    // var answer = 0;
    // return answer;
    
    // 1. 인접 리스트 생성
    const graph = makeGraph(n, edge)
    
    function bfs(start) {
        // 노드 방문 여부를 기록
        let visited = Array(n+1).fill(false);
        // start로 부터 거리를 기록
        let dist = Array(n+1).fill(0);
        
        // 시작 위치 부터 주변노드를 순서대로 접근 -> 다시 돌아 오지 않기 때문에 queue를 사용
        let queue = [];
        queue.push(start);
        visited[start] = true;
        
        while(queue.length > 0 ) {
            
            // 큐에서 노드를 가져옴.
            let node = queue.shift();
            
            // 인접 리스트에서 해당 노드의 다음(인접) 노드를 확인 한다.
            for (let next of graph[node]) {
                
                if (!visited[next]) {
                    queue.push(next); // 다음 노드 기준으로 인접 노드를 확인 하기 위해 
                    dist[next] = dist[node] + 1; // 거리 갱신
                    visited[next] = true; // 거리를 계산하면 방문 한 것으로 취급
                }
            }
            
        }
    
        return dist;        
    }
    
    // 1번 노드를 기준으로 각 노드의 거리를 구함.
    let dist = bfs(1);
    
    // 0,1,1,3,4...
    const maxDist = Math.max(...dist);
    const answer = dist.filter(d => d === maxDist).length;
    return answer;
}

function makeGraph(n, edge) {
    
    // 2중 배열 만듬
    // 0 : [],
    // 1 : [ 3, 2 ],
    // 2 : [ 3, 1, 4, 5 ],
    // 3 : [ 6, 4, 2, 1 ],
    // 4 : [ 3, 2 ],
    // 5 : [ 2 ],
    // 6 : [ 3 ]
    let adjacentList = Array.from({length: n + 1}, () => []);
 
    // 배열은 중첩되지 않으므로 각각의 인접 리스트에 추가 하면 된다.
    for( let [a, b] of edge) {
        adjacentList[a].push(b);
        adjacentList[b].push(a);        
    }
    
    return adjacentList;    
}
