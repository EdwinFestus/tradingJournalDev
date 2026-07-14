import Grid from "@mui/material/Grid";

import EquityChart from "../charts/EquityChart";
import MonthlyPnLChart from "../charts/MonthlyPnLChart";

import type {
    PerformanceSectionProps,
} from "./PerformanceSection.types";

export default function PerformanceSection({
    charts,
}: PerformanceSectionProps) {
    return (
        <Grid
            container
            spacing={3}
            mt={1}
        >
            <Grid size={{ xs: 12, lg: 8 }}>
                <EquityChart
                    data={charts.equityCurve}
                />
            </Grid>

            <Grid size={{ xs: 12, lg: 4 }}>
                <MonthlyPnLChart
                    data={charts.monthlyPnL}
                />
            </Grid>
        </Grid>
    );
}