import { buildAnalytics } from "../analytics/index.js";
import { buildCharts } from "./chartBuilder.js";
import { buildInsights } from "./insightBuilder.js";
import { buildPortfolio, buildStreak } from './portfolioBuilder.js';


export function buildDashboard(trades = []) {
    if (!Array.isArray(trades)) {
        throw new TypeError(
            "buildDashboard expected an array of trades."
        );
    }

    return {
        analytics: buildAnalytics(trades),
        recentTrades: trades.slice(0, 10),
        charts: buildCharts(trades),
        portfolio: buildPortfolio(trades),
        streak: buildStreak(trades),
        insights: buildInsights(trades),
    };
}