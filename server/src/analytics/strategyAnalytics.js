export function getStrategyAnalytics(trades) {

    const closedTrades = trades.filter(
        trade => trade.status === "CLOSED"
    );

    const grouped = {};

    for (const trade of closedTrades) {

        if (!grouped[trade.strategy]) {

            grouped[trade.strategy] = {

                trades: 0,
                wins: 0,
                losses: 0,
                profit: 0,

            };

        }

        grouped[trade.strategy].trades++;

        grouped[trade.strategy].profit += trade.profitLoss;

        if (trade.outcome === "WIN")
            grouped[trade.strategy].wins++;

        if (trade.outcome === "LOSS")
            grouped[trade.strategy].losses++;

    }

    Object.values(grouped).forEach(strategy => {

        strategy.winRate =
            strategy.trades === 0
                ? 0
                : (strategy.wins / strategy.trades) * 100;

    });

    return grouped;

}