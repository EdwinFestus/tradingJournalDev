import Grid from "@mui/material/Grid";

import ChartCard from "@/shared/ui/Cards/ChartCard";

import EquityChart from "../charts/EquityChart";
import MonthlyPnLChart from "../charts/MonthlyPnLChart";

import type { PerformanceSectionProps } from "./PerformanceSection.types";

export default function PerformanceSection({
  charts,
  loading = false,
}: PerformanceSectionProps) {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, xl: 8 }}>
        <ChartCard
          loading={loading}
          title="Equity Curve"
          subtitle="Account growth over time"
          height={380}
        >
          <EquityChart data={charts.equityCurve} />
        </ChartCard>
      </Grid>

      <Grid size={{ xs: 12, xl: 4 }}>
        <ChartCard
          loading={loading}
          title="Monthly Profit"
          subtitle="Current year"
          height={380}
        >
          <MonthlyPnLChart data={charts.monthlyPnL} />
        </ChartCard>
      </Grid>
    </Grid>
  );
}