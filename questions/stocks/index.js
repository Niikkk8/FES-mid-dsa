/** Stock Trading
 * 
 * Given an array of 'prices', find the transaction that will yield the greatest profits.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing 
 * a different day in the future to sell that stock.
 * 
 * @examples
 * stocks([8, 3, 6, 1, 6, 4, 7]) -> 6
 * stocks([1, 8, 3, 4]) -> 7
 * stocks([2, 9, 18, 9, 2]) ->  16
 */

const stocks = (prices) => {
    // HARD TO UNDERSTAND
    let leftPointer = 0;
    let rightPointer = 1;
    let maxProfit = 0;

    while (rightPointer < prices.length) {
        const profit = prices[rightPointer] - prices[leftPointer]
        if (profit > 0) {
            maxProfit = Math.max(maxProfit, profit)
        } else {
            leftPointer = rightPointer;
        }
        rightPointer++;
    }
    return maxProfit;
}


//DO NOT EDIT BELOW THIS LINE
module.exports = stocks;
