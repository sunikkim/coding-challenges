/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

O maximum profit (diff between two nums in array, second one minus first)
I array of nums
C none
E none

maxProfit = 0
minPrice (min val so far) = 1000000000 (max integer)

iterate through array
if val < minPrice
minPrice = val

if val - minPrice > maxProfit
maxProfit = val - minPrice

return maxProfit

O(N) time
O(1) space
*/

const maxProfit = (prices) => {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;

  for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minPrice) {
          minPrice = prices[i];
      }

      if (prices[i] - minPrice > maxProfit) {
          maxProfit = prices[i] - minPrice;
      }
  }

  return maxProfit;
};