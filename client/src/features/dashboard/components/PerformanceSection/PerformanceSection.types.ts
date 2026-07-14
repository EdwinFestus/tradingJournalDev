import type { DashboardAnalytics, DashboardCharts } from "../../types/dashboard.types";

export interface PerformanceSectionProps {
    analytics: DashboardAnalytics;
    charts: DashboardCharts;
    loading?: boolean;
}