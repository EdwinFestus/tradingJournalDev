import Grid from "@mui/material/Grid";

import Section from "../../../../shared/ui/Section";

import EquityChart from "../charts/EquityChart";
import MonthlyPnLChart from "../charts/MonthlyPnLChart";

import type {
    PerformanceSectionProps,
} from "./PerformanceSection.types";

export default function PerformanceSection({
    charts,
}: PerformanceSectionProps) {
    return (
        <Section
            title="Performance"
            subtitle="Visualize your trading performance over time."
        >
            <Grid
                container
                spacing={3}
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
        </Section>
    );
}