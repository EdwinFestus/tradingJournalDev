export function buildCharts(trades = []) {
    const closedTrades = trades.filter(
        trade => trade.status === "CLOSED"
    );

    let runningPnL = 0;

    const equityCurve = closedTrades.map(trade => {
        runningPnL += trade.profitLoss ?? 0;

        return {
            date: trade.closedAt || trade.updatedAt || trade.createdAt,
            equity: runningPnL,
        };
    });

    const monthlyMap = {};

    closedTrades.forEach(trade => {
        const date = new Date(
            trade.closedAt || trade.updatedAt || trade.createdAt
        );

        const key = `${date.getFullYear()}-${String(
            date.getMonth() + 1
        ).padStart(2, "0")}`;

        if (!monthlyMap[key]) {
            monthlyMap[key] = 0;
        }

        monthlyMap[key] += trade.profitLoss ?? 0;
    });

    const monthlyPnL = Object.entries(monthlyMap).map(([month, pnl]) => ({
        month,
        pnl,
    }));

    let wins = 0;
    let total = 0;

    const winRateTrend = closedTrades.map(trade => {
        total++;

        if (trade.outcome === "WIN") {
            wins++;
        }

        return {
            trade: total,
            winRate: Number(((wins / total) * 100).toFixed(2)),
        };
    });

    return {
        equityCurve,
        monthlyPnL,
        winRateTrend,
    };
}