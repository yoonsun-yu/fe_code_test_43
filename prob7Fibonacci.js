/*
    [설명]
        K(저장할 값) = N(-1위치 값) + M(-2위치값) 
        N / X = P
        M / X = Q
        N % X = A 
        M % X = B

        N + M = (P*X + A) + (Q*X + B) = (P + Q)*X + (A + B)
        (N+M) % X = (P + Q)*X % X + (A+B) % X
        (P+Q)는 X곱하기 하고 있기 때문에 나머지 값 항상 0!!
        (N+M) % X= (A + B) % X
    
    *결론 :  K에 N+M 대신 A+B를 저장해도 된다.

    https://school.programmers.co.kr/learn/courses/30/lessons/12945
*/

// top-down
// 최대값으로 설정 하면 RangeError: Maximum call stack size exceeded
function solution(n) {
    let memo = new Array(n + 1).fill(0);
    const x = 1234567;

    function fibonacci(n) {
        // n이 0,1 이면 0,1 리턴 값
        if (n <= 1) {
            return n;
        }

        // 값이 있으면 해당 값 리턴
        if (memo[n] > 0) {
            // console.log(dp[n])
            return memo[n];
        }

        memo[n] = (fibonacci(n - 2) + fibonacci(n - 1)) % x;
        return memo[n];
    }

    return fibonacci(n);
}

//bottom-up
function solution(n) {
    let memo = new Array(n+1).fill(0);
    const x = 1234567;
    
    memo[0] = 0;
    memo[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        memo[i] = (memo[i-1] + memo[i-2]) % x;
    }
    
    return memo[n];
}
