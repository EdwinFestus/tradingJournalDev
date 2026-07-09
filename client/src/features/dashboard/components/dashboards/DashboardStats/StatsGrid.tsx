import Grid from "@mui/material/Grid";

import {
    BarChart3,
    Trophy,
    ShieldCheck,
    TrendingUp,
    TrendingDown,
    Target,
    Clock3,
    Activity,
} from "lucide-react";

import  StatsCard   from "./StatsCard.tsx";

import type { DashboardOverview } from "../../../types/dashboard.types";

interface Props {
    overview: DashboardOverview;
}

export default function StatsGrid({
    overview,
}: Props) {
    return (
        <Grid container spacing={3}>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <StatsCard
                    title="Total Trades"
                    value={overview.totalTrades}
                    subtitle="Executed Trades"
                    icon={<BarChart3 size={22} />}
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <StatsCard
                    title="Win Rate"
                    value={`${overview.winRate.toFixed(1)}%`}
                    subtitle="Winning Percentage"
                    icon={<Target size={22} />}
                    color="success.main"
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <StatsCard
                    title="Average RR"
                    value={overview.averageRR.toFixed(2)}
                    subtitle="Risk Reward"
                    icon={<ShieldCheck size={22} />}
                    color="info.main"
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <StatsCard
                    title="Net Profit"
                    value={`$${overview.netProfit.toFixed(2)}`}
                    subtitle="Overall P/L"
                    icon={<TrendingUp size={22} />}
                    color={
                        overview.netProfit >= 0
                            ? "success.main"
                            : "error.main"
                    }
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <StatsCard
                    title="Winning Trades"
                    value={overview.winningTrades}
                    subtitle="Closed Winners"
                    icon={<Trophy size={22} />}
                    color="success.main"
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <StatsCard
                    title="Losing Trades"
                    value={overview.losingTrades}
                    subtitle="Closed Losers"
                    icon={<TrendingDown size={22} />}
                    color="error.main"
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <StatsCard
                    title="Open Trades"
                    value={overview.openTrades}
                    subtitle="Currently Running"
                    icon={<Activity size={22} />}
                    color="warning.main"
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <StatsCard
                    title="Closed Trades"
                    value={overview.closedTrades}
                    subtitle="Completed Trades"
                    icon={<Clock3 size={22} />}
                />
            </Grid>

        </Grid>
    );
}