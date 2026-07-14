import Grid from "@mui/material/Grid";

import MetricCard from "../../../../shared/ui/Cards/MetricCard";

import ProfitFactorCard from "./ProfitFactorCard";
import WinRateCard from "./WinRateCard";

import formatCurrency from "../../utils/formatCurrency";

import type {
    DashboardAnalytics,
} from "../../types/dashboard.types";

interface Props {
    analytics: DashboardAnalytics;
}

export default function AnalyticsOverviewSection({
    analytics,
}: Props) {
    return (
        <Grid
            container
            spacing={3}
        >
            <Grid size={{ xs: 12, md: 6, xl: 3 }}>
                <MetricCard
                    title="Average Win"
                    value={formatCurrency(
                        analytics.performance.averageWin
                    )}
                    subtitle="Average Winning Trade"
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6, xl: 3 }}>
                <MetricCard
                    title="Average Loss"
                    value={formatCurrency(
                        analytics.performance.averageLoss
                    )}
                    subtitle="Average Losing Trade"
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6, xl: 3 }}>
                <ProfitFactorCard
                    analytics={analytics}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6, xl: 3 }}>
                <WinRateCard
                    analytics={analytics}
                />
            </Grid>
        </Grid>
    );
}