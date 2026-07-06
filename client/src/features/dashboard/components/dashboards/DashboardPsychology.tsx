import { Grid } from "@mui/material";

import PsychologyChart from "../charts/PsychologyChart";
import PsychologyTable from "../tables/PsychologyTable";

import type {
    DashboardAnalytics,
} from "../../types/dashboard.types";

interface Props {
    analytics: DashboardAnalytics;
}

export default function DashboardPsychology({
    analytics,
}: Props) {
    return (
        <Grid
            container
            spacing={3}
            sx={{ mb: 4 }}
        >
            <Grid size={{ xs: 12, md: 7 }}>
                <PsychologyChart
                    data={analytics.psychology}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
                <PsychologyTable
                    data={analytics.psychology}
                />
            </Grid>
        </Grid>
    );
}