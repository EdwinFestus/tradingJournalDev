import { Grid } from "@mui/material";

import StrategyChart from "../charts/StrategyChart";
import TopStrategyTable from "../tables/TopStrategyTable";

import type {
    DashboardAnalytics,
} from "../../types/dashboard.types";

interface Props {
    analytics: DashboardAnalytics;
}

export default function DashboardStrategy({
    analytics,
}: Props) {
    return (
        <Grid
            container
            spacing={3}
            sx={{ mb: 4 }}
        >
            <Grid size={{ xs: 12, md: 6 }}>
                <StrategyChart
                    data={analytics.strategy}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <TopStrategyTable
                    data={analytics.strategy}
                />
            </Grid>
        </Grid>
    );
}