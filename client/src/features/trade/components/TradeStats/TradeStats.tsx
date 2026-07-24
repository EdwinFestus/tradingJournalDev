import Grid from "@mui/material/Grid";

import { useDashboard } from "@/features/dashboard/hooks/useDashboard";


import TradeStatCard from "./TradeStatCard";

export default function TradeStats() {
  const { analytics, loading } = useDashboard();

  if (loading || !analytics) {
    return null;
  }

  const { overview } = analytics;

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 3 }}>
        <TradeStatCard
          title="Total Trades"
          value={overview.totalTrades}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <TradeStatCard
          title="Win Rate"
          value={`${overview.winRate.toFixed(2)}%`}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <TradeStatCard
          title="Net Profit"
          value={overview.netProfit.toFixed(2)}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <TradeStatCard
          title="Average RR"
          value={overview.averageRR.toFixed(2)}
        />
      </Grid>
    </Grid>
  );
}