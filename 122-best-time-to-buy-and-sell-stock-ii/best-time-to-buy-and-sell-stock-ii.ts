function maxProfit(prices: number[]): number {

    let buy = prices[0], profit = 0;
    for (let i = 1, len = prices.length; i < len; i++) {
        if (prices[i] > buy) {
            profit += prices[i] - buy
        } 
        buy = prices[i];
    }
    return profit;
    
};