/*
    Time: O(n)
    Space: O(1)
    Note: Greedy algorithm, take profits when can, update min value if lower value presents itself.
    URL: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
var maxProfit = function (prices) {
  let min = Infinity;
  let profit = 0;

  for (let price of prices) {
    if (min > price) {
      min = price;
    } else {
      profit = Math.max(profit, price - min);
    }
  }

  return profit;
};
