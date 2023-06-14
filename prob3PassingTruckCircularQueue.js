
class BridgeQueue {
    
    // length = 다리 길이 + 출차위치
    constructor(length, bridgeWeight) {
        
        this.queue = new Array(length); // 다리 길이 + 1
        this.locOutside = 0; // 출차 위치 
        this.locStart = length - 1; // 다리 입구
        
        this.size = 0; // 다리 위의 트럭 수
        this.totalTruckWeight = 0; // 다리 위의 트럭 총 무게
        this.bridgeWeight = bridgeWeight;
        this.time = 0; // 걸리는 시간
        this.length = length //  큐의 총 길이               
        
    }
    
    // 시간이 흐를 때 다리의 상태 변경을 정의
    timeGo() {
        
        // 환영 큐를 만드는 심플한 기술. 예) 총 길이 10이면 위치 9에서 +1 되는 순간 0으로 바뀜
        this.locOutside = (this.locOutside + 1) % this.length;
        this.locStart = (this.locStart + 1) % this.length;        
        this.time++;

    }
    
    // 출차
    shift() {
        
        if (this.size <= 0) {
            return;
        }
        
        if (this.queue[this.locOutside]) {
            this.totalTruckWeight -= this.queue[this.locOutside]
            this.queue[this.locOutside] = undefined;
            this.size--;
        }
        
    }
    
    // 입차
    push(truckWeight) {
        
        if (this.bridgeWeight < this.totalTruckWeight + truckWeight) {
            return false;
        }
        
        if (!this.queue[this.locStart]) {
            this.totalTruckWeight += truckWeight;
            this.queue[this.locStart] = truckWeight;
            this.size++;
            return true;
        }
        
        return false;
    }
    
    isEmpty() {
        return this.size <= 0;
    }

    getTime() {
        return this.time;
    }

}

function solution(bridge_length, weight, truck_weights) {
    
    let bridgeQueue = new BridgeQueue(bridge_length + 1, weight);
    
    // 대기 중인 차가 있거나, 다리에 차가 있다면
    while(!bridgeQueue.isEmpty() || truck_weights.length > 0) {

        // 출차 먼저 실시 한다. 최초에는 X
        bridgeQueue.shift();
        
        // 대기 중인 차가 있다면?
        if (truck_weights.length > 0) {
            
            if (bridgeQueue.push(truck_weights[0])) {
                truck_weights.shift();
            } 
        }
        
        
        bridgeQueue.timeGo();
    }
    
    
    return bridgeQueue.getTime();
    
}
