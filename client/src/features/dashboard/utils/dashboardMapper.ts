import type { DashboardOverview } from "../types/dashboard.types";


export function mapOverview(overview: DashboardOverview) {
    return {
        totalTrades: overview.totalTrades,
        winRate: overview.winRate,
        netProfit: overview.totalProfit,
        averageRR: overview.averageRR,
    };
}