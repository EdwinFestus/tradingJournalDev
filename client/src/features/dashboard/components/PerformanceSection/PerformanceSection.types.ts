import type {
    DashboardCharts,
} from "../../types/dashboard.types";

export interface PerformanceSectionProps {
    charts: DashboardCharts;
    loading?: boolean;
}