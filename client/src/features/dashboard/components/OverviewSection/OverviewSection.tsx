import Grid from "@mui/material/Grid";

import StatCard from "@/shared/ui/Cards/StatCard";

import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import CandlestickChartRoundedIcon from "@mui/icons-material/CandlestickChartRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

import type { OverviewSectionProps } from "./OverviewSection.types";

export default function OverviewSection({
    analytics,
    loading = false,
}: OverviewSectionProps) {

    return (

        <Grid container spacing={3}>

            <Grid size={{ xs:12, sm:6, lg:3 }}>

                <StatCard
                    loading={loading}
                    title="Total Trades"
                    value={analytics.overview.totalTrades}
                    icon={<CandlestickChartRoundedIcon />}
                />

            </Grid>

            <Grid size={{ xs:12, sm:6, lg:3 }}>

                <StatCard
                    loading={loading}
                    title="Net Profit"
                    value={`$${analytics.overview.netProfit}`}
                    icon={<PaidRoundedIcon />}
                />

            </Grid>

            <Grid size={{ xs:12, sm:6, lg:3 }}>

                <StatCard
                    loading={loading}
                    title="Win Rate"
                    value={`${analytics.overview.winRate}%`}
                    icon={<EmojiEventsRoundedIcon />}
                />

            </Grid>

            <Grid size={{ xs:12, sm:6, lg:3 }}>

                <StatCard
                    loading={loading}
                    title="Average RR"
                    value={analytics.overview.averageRR}
                    icon={<TrendingUpRoundedIcon />}
                />

            </Grid>

        </Grid>

    );

}