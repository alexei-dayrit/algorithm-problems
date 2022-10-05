/* 1 pass solution with pointers
- const bestProfit = 0
- const left = 0 (buy date)
- const right = 1 (sell date)
- while right pointer > prices.length
  - if prices at left < prices at right
    - then there is a profit so, profit = right - left
    - compare if better than bestProfit, so bestProfit = Math.max(profit, bestProfit)
  - else left = right pointer because right pointer is the new min price
  - right++ at end to shift sell date and find best profit
- return profit

*/

var maxProfit = function (prices) {
  let [bestProfit, left, right] = [0, 0, 1];

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      bestProfit = Math.max(bestProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return bestProfit;
};

/*
var maxProfit = function (prices) {
  let profit = 0;
  let lowest = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowest) {
      lowest = prices[i];
    }

    const potentialProfit = prices[i] - lowest;

    if (potentialProfit > profit) {
      profit = potentialProfit;
    }
  }
  return profit;
};
*/

/* BRUTE FORCE METHOD
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let a = i + 1; a < prices.length; a++) {
      let potentialProfit = prices[a] - prices[i];
      if (potentialProfit > profit) {
        profit = potentialProfit;
      }
    }
  }
  return profit;
};
*/
