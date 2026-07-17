import Grid from "@mui/material/Grid";

import Section from "../../../../shared/ui/Section";

import StrategyDistributionCard from "./StrategyDistributionCard";
import TopStrategyCard from "./TopStrategyCard";
import WorstStrategyCard from "./WorstStrategyCard";

import type {
    DashboardAnalytics,
} from "../../types/dashboard.types";

interface Props {
    analytics: DashboardAnalytics;
}

export default function StrategySection({
    analytics,
}: Props) {
    return (
        <Section
            title="Strategy"
            subtitle="Analyze which trading strategies perform best."
        >
            <Grid container spacing={3}>
                <Grid size={{ xs: 12 }}>
                    <StrategyDistributionCard
                        analytics={analytics}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TopStrategyCard
                        analytics={analytics}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <WorstStrategyCard
                        analytics={analytics}
                    />
                </Grid>
            </Grid>
        </Section>
    );
}