export function buildInsights(trades = []) {
    const insights = [];

    const closedTrades = trades.filter(
        trade => trade.status === "CLOSED"
    );

    if (closedTrades.length === 0) {
        return [
            {
                title: "No Closed Trades",
                description: "Close trades to generate trading insights.",
            },
        ];
    }

    const wins = closedTrades.filter(
        trade => trade.outcome === "WIN"
    ).length;

    const losses = closedTrades.filter(
        trade => trade.outcome === "LOSS"
    ).length;

    const winRate = (wins / closedTrades.length) * 100;

    if (winRate >= 60) {
        insights.push({
            title: "Excellent Win Rate",
            description: `Current win rate is ${winRate.toFixed(1)}%.`,
        });
    } else if (winRate < 40) {
        insights.push({
            title: "Needs Improvement",
            description: `Win rate is ${winRate.toFixed(1)}%. Review your strategy.`,
        });
    }

    const pnl = closedTrades.reduce(
        (sum, trade) => sum + (trade.profitLoss ?? 0),
        0
    );

    insights.push({
        title: "Net Performance",
        description:
            pnl >= 0
                ? `Overall Profit: ${pnl.toFixed(2)}`
                : `Overall Loss: ${Math.abs(pnl).toFixed(2)}`,
    });

    insights.push({
        title: "Trade Summary",
        description: `${wins} Wins • ${losses} Losses`,
    });

    return insights;
}