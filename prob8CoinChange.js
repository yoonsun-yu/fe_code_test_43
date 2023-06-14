// Top-down way
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

	const max = amount + 1;
	let memo = Array(amount+1).fill(max+1);

	function minCoins(n) {

		// 남은 금액과 코인의 가격이 동일한 경우. 
		if (n === 0) {
			return 0;
		}

		// 남은 금액 보다 코인의 가격의 큰 경우. 계산이 불가한 경우
		if (n < 0) {
			return max;
		}
		
		if (memo[n] <= max) {
			return memo[n];
		}

		let min = max;

		for(let coin of coins) {
			min = Math.min(min, minCoins(n-coin) + 1);
		}

		memo[n] = min;
		return memo[n]

	}

	let answer = minCoins(amount);

	if (answer === max) {
		return -1;
	} else {
		return answer;
	}
};

// Bottom-up way
var coinChange = function (coins, amount) {
  // 발생할 수 없는 값.
  const max = amount + 1;
  // 최소값으로 변경 되기 때문에 초기값은 최대값으로
  let memo = Array(amount+1).fill(max);

    memo[0] = 0;

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            memo[i] = Math.min(memo[i], memo[i - coin] + 1);
        }
    }

    if (memo[amount] === max) {
        return -1;
    } else {
        return memo[amount];
    }
};
