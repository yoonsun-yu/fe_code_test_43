// 다리에 트럭을 올릴 수 있는 조건
// 1. 먼저 무게 기준,
//    - 다리에 있는 트럭의 총 무게 + 대기하고 있는 트럭의 무게 = 총 무게 합, 이 총 무게 합이 다리가 견딜 수 있는 무게 즉, weight 이하여야 하죠.
// 2. 거리 기준,
//    - 다리에 올라갈 수 있는 트럭의 갯수가 다리길이, 즉 bridge_length 이하여야 하죠.

// 조건이 충족될 때 Action
// 1. 다리에 트럭을 진입시키고, 즉, 대기트럭에서 트럭을 제거하고
// 2. 거리 기준으로는 남은 거리를 다리의 길이로 업데이트 해 주면 되겠죠.
// 3. 그리고 무게기준으로는 총 무게인 weight에 트럭의 무게를 더해주면 되겠구요.

function solution(bridge_length, weight, truck_weights) {
  let bridge = []; // 다리를 건너는 트럭의 무게와 트럭의 위치를 저장하는 큐
  let total_weight = 0; // 다리 위의 트럭의 무게를 저장할 변수 초기화
  let time = 0; // 경과 시간을 저장할 변수 초기화


  // 모든 트럭이 큐에서 나올 때까지 반복
  while (bridge.length > 0 || truck_weights.length > 0) {
  

    // 큐에 있는 트럭들의 위치를 1씩 증가시킴
    for (let i = 0; i < bridge.length; i++) {
      bridge[i][1]++;
    }

    // 큐의 첫 번째 트럭이 다리 끝에 도달했다면
    if (bridge[0] && bridge[0][1] >= bridge_length) {
      // 큐에서 제거하고 totalWeight를 갱신함
      const truck = bridge.shift();
      total_weight -= truck[0];
    }

    // 대기 중인 트럭이 있고, 다리에 진입할 수 있다면
    if (truck_weights.length > 0 &&
      total_weight + truck_weights[0] <= weight) {

      // 큐에 트럭의 무게와 트럭의 위치를 추가하고 total_weight를 갱신함
      let truck_weight = truck_weights.shift();
      bridge.push([truck_weight, 0]);
      total_weight += truck_weight;
    }

      // 경과 시간을 1초 증가시킴
      time++;
  }

  // 경과 시간을 반환함
  return time;
}
