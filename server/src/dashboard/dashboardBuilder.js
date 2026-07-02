import { buildAnalytics } from "../analytics/index.js";


export async function buildDashboard(trades = []) {
    if (!Array.isArray(trades)) {
        throw new TypeError(
            "buildDashboard expected an array of trades."
        );
    }

    return {
        analytics: await buildAnalytics(trades),
        recentTrades: trades.slice(0, 10),
        charts: {
            equityCurve: [],
            monthlyPnL: [],
            winRateTrend: [],
        },
        portfolio: {
            balance: 0,
            equity: 0,
            netProfit: 0,
        },
        streak: {
            current: 0,
            best: 0,
        },
        insights: [],
    };
}