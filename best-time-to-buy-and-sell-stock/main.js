var maxProfit = function (prices) {
  let profit = 0;
  let lowest = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowest) {
      lowest = prices[i];
    }

    let potentialProfit = prices[i] - lowest;

    if (potentialProfit > profit) {
      profit = potentialProfit;
    }
  }
  return profit;
};

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
