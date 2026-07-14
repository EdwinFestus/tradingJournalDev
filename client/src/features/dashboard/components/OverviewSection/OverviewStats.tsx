import Grid from "@mui/material/Grid";
import {
    BarChart3,
    Trophy,
    Target,
    TrendingUp,
    TrendingDown,
    ShieldCheck,
    Activity,
    Clock3,
} from "lucide-react";

import MetricCard from "@/shared/ui/Cards/MetricCard";

import type { DashboardOverview } from "../../types/dashboard.types";

interface OverviewStatsProps {
    overview: DashboardOverview;
}

export default function OverviewStats({
    overview,
}: OverviewStatsProps) {
    return (
        <Grid container spacing={3}>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <MetricCard
                    title="Total Trades"
                    value={overview.totalTrades}
                    subtitle="Executed trades"
                    icon={<BarChart3 size={20} />}
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <MetricCard
                    title="Win Rate"
                    value={`${overview.winRate.toFixed(1)}%`}
                    subtitle="Winning percentage"
                    icon={<Target size={20} />}
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <MetricCard
                    title="Net Profit"
                    value={overview.netProfit}
                    subtitle="Overall P/L"
                    icon={<TrendingUp size={20} />}
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <MetricCard
                    title="Average RR"
                    value={overview.averageRR.toFixed(2)}
                    subtitle="Risk / Reward"
                    icon={<ShieldCheck size={20} />}
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <MetricCard
                    title="Winning Trades"
                    value={overview.winningTrades}
                    subtitle="Closed winners"
                    icon={<Trophy size={20} />}
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <MetricCard
                    title="Losing Trades"
                    value={overview.losingTrades}
                    subtitle="Closed losers"
                    icon={<TrendingDown size={20} />}
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <MetricCard
                    title="Open Trades"
                    value={overview.openTrades}
                    subtitle="Running positions"
                    icon={<Activity size={20} />}
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <MetricCard
                    title="Closed Trades"
                    value={overview.closedTrades}
                    subtitle="Completed trades"
                    icon={<Clock3 size={20} />}
                />
            </Grid>

        </Grid>
    );
}