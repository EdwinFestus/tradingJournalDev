import MetricCard from "../../../../shared/ui/Cards/MetricCard";

import type {
    DashboardAnalytics,
} from "../../types/dashboard.types";

interface Props {
    analytics: DashboardAnalytics;
}

export default function WinRateCard({
    analytics,
}: Props) {
    return (
        <MetricCard
            title="Overall Win Rate"
            value={`${analytics.overview.winRate.toFixed(1)}%`}
            subtitle="Winning Percentage"
        />
    );
}