export function calculateProfitLoss(
    orderType,
    outcome,
    prices
) {

    let profitLoss = 0;

    if (outcome === "WIN") {

        profitLoss =
            orderType === "BUY"
                ? (prices.takeProfit - prices.entry) * 100
                : (prices.entry - prices.takeProfit) * 100;

    }

    else if (outcome === "LOSS") {

        profitLoss =
            orderType === "BUY"
                ? (prices.stopLoss - prices.entry) * 100
                : (prices.entry - prices.stopLoss) * 100;

    }

    return Number(
        profitLoss.toFixed(2)
    );

}