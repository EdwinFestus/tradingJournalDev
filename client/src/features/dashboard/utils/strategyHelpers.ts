import type {
    DashboardAnalytics,
    StrategyAnalytics,
} from "../types/dashboard.types";

export interface StrategyResult extends StrategyAnalytics {
    strategy: string;
}

export function getStrategyArray(
    analytics: DashboardAnalytics
): StrategyResult[] {
    return Object.entries(analytics.strategy).map(
        ([strategy, value]) => ({
            strategy,
            ...value,
        })
    );
}

export function getTopStrategy(
    analytics: DashboardAnalytics
): StrategyResult | null {
    const strategies = getStrategyArray(analytics);

    if (!strategies.length) return null;

    return [...strategies].sort(
        (a, b) => b.winRate - a.winRate
    )[0];
}

export function getWorstStrategy(
    analytics: DashboardAnalytics
): StrategyResult | null {
    const strategies = getStrategyArray(analytics);

    if (!strategies.length) return null;

    return [...strategies].sort(
        (a, b) => a.winRate - b.winRate
    )[0];
}