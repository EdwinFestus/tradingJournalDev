import Grid from "@mui/material/Grid";

import StatCard from "@/shared/ui/Cards/StatCard";

import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import CandlestickChartRoundedIcon from "@mui/icons-material/CandlestickChartRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";

export default function OverviewStats() {

    return (

        <Grid
            container
            spacing={3}
        >

            <Grid size={{ xs:12, md:6, lg:3 }}>

                <StatCard
                    title="Total Trades"
                    value="248"
                    icon={<CandlestickChartRoundedIcon />}
                />

            </Grid>

            <Grid size={{ xs:12, md:6, lg:3 }}>

                <StatCard
                    title="Win Rate"
                    value="78%"
                    trend="up"
                    trendValue="+3.2%"
                    icon={<EmojiEventsRoundedIcon />}
                />

            </Grid>

            <Grid size={{ xs:12, md:6, lg:3 }}>

                <StatCard
                    title="Net Profit"
                    value="$12,480"
                    trend="up"
                    trendValue="+18%"
                    icon={<PaidRoundedIcon />}
                />

            </Grid>

            <Grid size={{ xs:12, md:6, lg:3 }}>

                <StatCard
                    title="Average RR"
                    value="1 : 3.6"
                    trend="up"
                    trendValue="+0.4"
                    icon={<TrendingUpRoundedIcon />}
                />

            </Grid>

        </Grid>

    );

}