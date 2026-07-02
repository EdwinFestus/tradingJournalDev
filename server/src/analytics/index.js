import { getOverviewAnalytics } from "./overviewAnalytics.js";
import { getPerformanceAnalytics } from "./performanceAnalytics.js";
import { getStrategyAnalytics } from "./strategyAnalytics.js";
import { getPairAnalytics } from "./pairAnalytics.js";

export async function buildAnalytics(trades) {
    return {
        overview: getOverviewAnalytics(trades),
        performance: getPerformanceAnalytics(trades),
        strategy: getStrategyAnalytics(trades),
        pairs: getPairAnalytics(trades),
    };
}