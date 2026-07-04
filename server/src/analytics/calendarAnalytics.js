export function getCalendarAnalytics(trades) {
    const closedTrades = trades.filter(
        trade => trade.status === "CLOSED"
    );

    const groupedByDate = closedTrades.reduce((groups, trade) => {
        const date = trade.date ? trade.date.toISOString().split('T')[0] : "Unknown";   

        if (!groups[date]) {
            groups[date] = [];
        }

        groups[date].push(trade);

        return groups;
    }

    , {});

    const analytics = Object.entries(groupedByDate).map(([date, trades]) => {
        const totalTrades = trades.length;
        const wins = trades.filter(trade => trade.outcome === "WIN").length;
        const losses = trades.filter(trade => trade.outcome === "LOSS").length;
        const breakEvens = trades.filter(trade => trade.outcome === "BE").length;
        const winRate = totalTrades > 0 ? (wins / totalTrades) * 100 : 0;
        const pnl = trades.reduce((sum, trade) => sum + (trade.profitLoss ?? 0), 0);

        return {
            date,
            totalTrades,
            wins,
            losses,
            breakEvens,
            winRate,
            pnl
        };
    });

    return analytics;
}   