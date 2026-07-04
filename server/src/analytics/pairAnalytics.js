export function getPairAnalytics(trades) {

    const closedTrades = trades.filter(
        trade => trade.status === "CLOSED"
    ); 

    const grouped = {};

    for (const trade of closedTrades) {
        if (!grouped[trade.pair]) {
            grouped[trade.pair] = {
                pair: trade.pair,
                totalTrades: 0,
                closedTrades: 0,
                wins: 0,
                losses: 0,
                breakEvens: 0,
                winRate: 0,
                pnl: 0
            };
        }

        const item = grouped[trade.pair];
        item.closedTrades++;

        if (trade.outcome === "WIN") item.wins++;
        if (trade.outcome === "LOSS") item.losses++;
        if (trade.outcome === "BE") item.breakEvens++;

        item.pnl += trade.profitLoss ?? 0;
    }

    for (const item of Object.values(grouped)) {
        item.winRate = item.closedTrades > 0 ? (item.wins / item.closedTrades) * 100 : 0;
    }

    return Object.values(grouped);
}