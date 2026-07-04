import { getOverviewAnalytics } from "./overviewAnalytics.js";
import { getPerformanceAnalytics } from "./performanceAnalytics.js";
import { getStrategyAnalytics } from "./strategyAnalytics.js";
import { getPairAnalytics } from "./pairAnalytics.js";
import { getRiskAnalytics } from "./riskAnalytics.js";
import { getCalendarAnalytics } from "./calendarAnalytics.js";
import { getTradeAnalytics } from "./tradeAnalytics.js";
import { getPsychologyAnalytics } from "./psychologyAnalytics.js";
import { getSessionAnalytics } from "./sessionAnalytics.js";


export function buildAnalytics(trades = []) {
    return {
        overview: getOverviewAnalytics(trades),
        performance: getPerformanceAnalytics(trades),
        strategy: getStrategyAnalytics(trades),
        pairs: getPairAnalytics(trades),
        risk: getRiskAnalytics(trades),
        psychology: getPsychologyAnalytics(trades),
        sessions: getSessionAnalytics(trades),
        calendar: getCalendarAnalytics(trades),
        trade: getTradeAnalytics(trades),
    };
}