import ChartCard from "../../../../shared/ui/Cards/ChartCard";

import StrategyDistributionChart from "../charts/StrategyDistributionChart";

import type {
    DashboardAnalytics,
} from "../../types/dashboard.types";

interface Props {
    analytics: DashboardAnalytics;
}

export default function StrategyDistributionCard({
    analytics,
}: Props) {
    return (
        <ChartCard
            title="Strategy Distribution"
            subtitle="Performance by trading strategy"
            fullHeight
        >
            <StrategyDistributionChart
                data={analytics.strategy}
            />
        </ChartCard>
    );
}