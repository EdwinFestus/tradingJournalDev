import { getClosedTrades } from "./analyticsHelpers.js";

export function getPsychologyAnalytics(trades = []) {
    const closedTrades = getClosedTrades(trades);

    const grouped = {};

    for (const trade of closedTrades) {
        const mood = trade.mood || "Unknown";

        if (!grouped[mood]) {
            grouped[mood] = {
                mood,
                trades: 0,
                wins: 0,
                losses: 0,
                breakEvens: 0,
                pnl: 0,
                winRate: 0,
            };
        }

        const item = grouped[mood];

        item.trades++;

        if (trade.outcome === "WIN") item.wins++;
        if (trade.outcome === "LOSS") item.losses++;
        if (trade.outcome === "BE") item.breakEvens++;

        item.pnl += trade.profitLoss ?? 0;
    }

    for (const item of Object.values(grouped)) {
        item.winRate =
            item.trades > 0
                ? Number(((item.wins / item.trades) * 100).toFixed(2))
                : 0;
    }

    return Object.values(grouped);
}