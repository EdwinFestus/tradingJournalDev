import { Grid } from "@mui/material";

import SessionPerformanceChart from "../charts/SessionPerformanceChart";
import SessionTable from "../tables/SessionTable";

import type {
    DashboardAnalytics,
} from "../../types/dashboard.types";

interface Props {
    analytics: DashboardAnalytics;
}

export default function DashboardSessions({
    analytics,
}: Props) {
    return (
        <Grid
            container
            spacing={3}
            sx={{ mb: 4 }}
        >
            <Grid size={{ xs: 12, md: 7 }}>
                <SessionPerformanceChart
                    data={analytics.sessions}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
                <SessionTable
                    data={analytics.sessions}
                />
            </Grid>
        </Grid>
    );
}