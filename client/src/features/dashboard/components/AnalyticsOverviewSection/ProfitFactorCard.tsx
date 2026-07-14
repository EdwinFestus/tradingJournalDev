import MetricCard from "../../../../shared/ui/Cards/MetricCard";

import type {
    DashboardAnalytics,
} from "../../types/dashboard.types";

interface Props {
    analytics: DashboardAnalytics;
}

export default function ProfitFactorCard({
    analytics,
}: Props) {
    const {
        totalProfit,
        totalLoss,
    } = analytics.overview;

    const profitFactor =
        totalLoss === 0
            ? "∞"
            : (totalProfit / totalLoss).toFixed(2);

    return (
        <MetricCard
            title="Profit Factor"
            value={profitFactor}
            subtitle="Profit ÷ Loss"
            // icon={<ShieldRounded />}
            color="info.main"
        />

    );
}