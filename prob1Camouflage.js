// 1번 각 종류별 옷의 갯수를 구하고
// 2번 그 갯수에 1을 더해서 그 모든 경우의 수를 다 곱하고
// 3번 그 곱한 값에 모든 종류의 옷을 아무것도 입지 않은 경우는 경우의 수에서 제외해야 하기 때문에
// 마지막에 1일 빼주면 정답

function solution(clothes) {
    
    // js에서 hash map 사용 (Map은 키-값 쌍으로 이루어진 컬렉션)
    const map = new Map();
    
    for (let i =0; i < clothes.length ; i++) {

        // ["yellow_hat","header"] -> 의상, 종류
        const cloth = clothes[i][0];
        const clothType = clothes[i][1];
        
        // 해쉬 맵에서 리스트 가져옴. 없으면 신규 생성
        const list = map.get(clothType) ?? new Array();
        
        // list 마지막에 해당 의상을 추가.
        list.push(cloth)
        
        // 해쉬맵에 업데이트 : 신규 -> 추가, 존재 -> 업데이트
        map.set(clothType, list)
            
    }
    
    // 모든 경우를 곱 하려면 최초 값이 1이여야 함.
    let answer = 1;
    
    for (let key of map.keys()) {
        // key는 옷의 종류 값
        
        // 총 경우의 수 -> 해당 종류의 의상이 있는 경우에는 입지 않는 경우도 생각해야 함.
        // header -> "yellow_hat" 만 등록되어 있다면? 모자를 입지 않는 경우도 생각 해야 함.
        answer *= map.get(key).length + 1; 
        
    }
    
    // 옷을 아무것도 입지 않는 케이스는 제외
    return answer - 1;
}
