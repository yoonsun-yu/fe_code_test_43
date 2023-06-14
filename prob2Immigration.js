function solution(n, times) {
    
    // times 배열을 오름차순으로 정렬
    // (a - b) 가 0 보다 크면 순서 변경
    // 적절한 min , max 타임을 정의하기 위해 심사관을 걸리는 시간별로 소팅함.
    times.sort((a,b) => a - b);
    
    let minTime = times[0]; // 가장 빠른 심사관의 시간
    let maxTime = times[times.length - 1] * n; // 가장 느린 심사관이 모든 사람을 심사하는 시간.
    
    // 최소 시간    
    let answer = maxTime;
    
    // 반씩 줄여 나가다 더이상 줄일 수 없는 상황이 되면 종료 한다.
    while(minTime <= maxTime) {
        
        // 중간 값 = 내림처리한 정수 값
        let midTime = Math.floor((minTime+maxTime)/2);
        
        let count = 0;
        
        for (let time of times) {
            count += Math.floor(midTime / time);
        }
        
        // n명이상 심사할 수 있으면 최소 시간 갱신하고 최대 시간을 줄임
        if (count >= n) {
            answer = midTime;
            // 현재 값은 기준을 충족하기 때문에, 현재 값 보다 -1 값을 최대 값으로 설정하여 범위를 반으로 줄여 나간다.
            maxTime = midTime - 1;            
        } else {
            // 현재 값은 기준을 충족하지 못하기 때문에, 현재 값보다 +1을 최소 값으로 설정하여 범위를 반으로 줄여 나간다.
            minTime = midTime + 1;
        }
        
    }
    
    // 최소 시간값
    return answer;
}
