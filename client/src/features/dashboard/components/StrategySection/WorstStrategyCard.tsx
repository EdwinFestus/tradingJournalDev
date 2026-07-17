import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

import MetricCard from "../../../../shared/ui/Cards/MetricCard";

import type {
    DashboardAnalytics,
} from "../../types/dashboard.types";

import {
    getWorstStrategy,
} from "../../utils/strategyHelpers";

interface Props {
    analytics: DashboardAnalytics;
}

export default function WorstStrategyCard({
    analytics,
}: Props) {

    const strategy =
        getWorstStrategy(analytics);

    if (!strategy) return null;

    return (
        <MetricCard
            title="Worst Strategy"
            value={strategy.strategy}
            subtitle={`${strategy.winRate.toFixed(1)}% Win Rate`}
            icon={<WarningAmberRoundedIcon />}
            color="error.main"
        />
    );
}