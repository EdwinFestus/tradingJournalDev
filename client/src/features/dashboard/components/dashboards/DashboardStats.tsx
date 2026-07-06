import PaidIcon from "@mui/icons-material/Paid";
import PercentIcon from "@mui/icons-material/Percent";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import { Grid } from "@mui/material";

import StatCard from "../cards/StatCard";

import type {
    DashboardOverview,
} from "../../types/dashboard.types";

interface Props {

    overview: DashboardOverview;

}

export default function DashboardStats({

    overview,

}: Props) {

    return (

        <Grid
            container
            spacing={3}
            mb={4}
        >

            <Grid size={{ xs: 12, md: 6, lg: 3 }}>

                <StatCard

                    title="Net Profit"

                    value={`$${overview.netProfit.toFixed(2)}`}

                    icon={<PaidIcon />}

                    color="#10B981"

                />

            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 3 }}>

                <StatCard

                    title="Win Rate"

                    value={`${overview.winRate}%`}

                    icon={<PercentIcon />}

                    color="#3B82F6"

                />

            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 3 }}>

                <StatCard

                    title="Average RR"

                    value={overview.averageRR}

                    icon={<TrendingUpIcon />}

                    color="#8B5CF6"

                />

            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 3 }}>

                <StatCard

                    title="Closed Trades"

                    value={overview.closedTrades}

                    subtitle={`${overview.totalTrades} Total Trades`}

                    icon={<AssessmentIcon />}

                    color="#F59E0B"

                />

            </Grid>

        </Grid>

    );

}