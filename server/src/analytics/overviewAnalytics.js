export function getOverviewAnalytics(trades) {
    const closedTrades = trades.filter(t => t.status === "CLOSED");

    const wins = closedTrades.filter(t => t.outcome === "WIN");
    const losses = closedTrades.filter(t => t.outcome === "LOSS");

    const totalProfit = wins.reduce(
        (sum, trade) => sum + trade.profitLoss,
        0
    );

    const totalLoss = Math.abs(
        losses.reduce((sum, trade) => sum + trade.profitLoss, 0)
    );

    return {
        totalTrades: trades.length,
        closedTrades: closedTrades.length,
        wins: wins.length,
        losses: losses.length,
        breakeven: closedTrades.filter(
            t => t.outcome === "BE"
        ).length,

        winRate:
            closedTrades.length === 0
                ? 0
                : (wins.length / closedTrades.length) * 100,

        netProfit: totalProfit - totalLoss,

        profitFactor:
            totalLoss === 0
                ? totalProfit
                : totalProfit / totalLoss,
    };
}