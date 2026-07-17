import ChartCard from "../../../../shared/ui/Cards/ChartCard";

import PsychologyChart from "../charts/PsychologyChart";

import type {
    DashboardAnalytics,
} from "../../types/dashboard.types";

interface Props {
    analytics: DashboardAnalytics;
}

export default function PsychologyDistributionCard({
    analytics,
}: Props) {
    return (
        <ChartCard
            title="Emotion Distribution"
            subtitle="Trading emotions"
            fullHeight
        >
            <PsychologyChart
                data={analytics.psychology}
            />
        </ChartCard>
    );
}