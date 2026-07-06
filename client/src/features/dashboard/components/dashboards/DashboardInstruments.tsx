import { Grid } from "@mui/material";

import InstrumentPerformanceChart from "../charts/InstrumentPerformanceChart";
import InstrumentTable from "../tables/InstrumentTable";

import type {
    DashboardAnalytics,
} from "../../types/dashboard.types";

interface Props {
    analytics: DashboardAnalytics;
}

export default function DashboardInstruments({
    analytics,
}: Props) {
    return (
        <Grid
            container
            spacing={3}
            sx={{ mb: 4 }}
        >
            <Grid size={{ xs: 12, md: 7 }}>
                <InstrumentPerformanceChart
                    data={analytics.pairs}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
                <InstrumentTable
                    data={analytics.pairs}
                />
            </Grid>
        </Grid>
    );
}