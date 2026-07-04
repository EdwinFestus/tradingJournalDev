export function getOverviewAnalytics(trades = []) {
    const closedTrades = trades.filter(
        trade => trade.status === "CLOSED"
    );

    const openTrades = trades.filter(
        trade => trade.status === "OPEN"
    );

    const winningTrades = closedTrades.filter(
        trade => trade.outcome === "WIN"
    );

    const losingTrades = closedTrades.filter(
        trade => trade.outcome === "LOSS"
    );

    const breakEvenTrades = closedTrades.filter(
        trade => trade.outcome === "BE"
    );

    const totalProfit = winningTrades.reduce(
        (sum, trade) => sum + (trade.profitLoss ?? 0),
        0
    );

    const totalLoss = losingTrades.reduce(
        (sum, trade) => sum + Math.abs(trade.profitLoss ?? 0),
        0
    );

    const netProfit = closedTrades.reduce(
        (sum, trade) => sum + (trade.profitLoss ?? 0),
        0
    );

    const averageRR =
        closedTrades.length > 0
            ? closedTrades.reduce(
                  (sum, trade) => sum + (trade.rrRatio ?? 0),
                  0
              ) / closedTrades.length
            : 0;

    return {
        totalTrades: trades.length,
        openTrades: openTrades.length,
        closedTrades: closedTrades.length,
        winningTrades: winningTrades.length,
        losingTrades: losingTrades.length,
        breakEvenTrades: breakEvenTrades.length,

        winRate:
            closedTrades.length > 0
                ? Number(
                      (
                          (winningTrades.length / closedTrades.length) *
                          100
                      ).toFixed(2)
                  )
                : 0,

        totalProfit,
        totalLoss,
        netProfit,
        averageRR: Number(averageRR.toFixed(2)),
    };
}