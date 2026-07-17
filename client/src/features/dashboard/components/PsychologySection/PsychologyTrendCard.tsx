import ChartCard from "../../../../shared/ui/Cards/ChartCard";

import PsychologyChart from "../charts/PsychologyChart";

import type {
    DashboardAnalytics,
} from "../../types/dashboard.types";

interface Props {
    analytics: DashboardAnalytics;
}

export default function PsychologyTrendCard({
    analytics,
}: Props) {
    return (
        <ChartCard
            title="Psychology Trend"
            subtitle="Trading mood distribution"
            fullHeight
        >
            <PsychologyChart
                data={analytics.psychology}
            />
        </ChartCard>
    );
}