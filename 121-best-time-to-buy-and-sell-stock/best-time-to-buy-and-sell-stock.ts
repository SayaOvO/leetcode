function maxProfit(prices: number[]): number {
    let k = 0, maxProfit = 0;
    for (let i = 1, len = prices.length; i < len; i++) {
        if (prices[i] > prices[k]) {
            let profit = prices[i] - prices[k]
            maxProfit = profit > maxProfit ? profit : maxProfit;
        } else {
            k = i;
        }
    }
    return maxProfit;
};