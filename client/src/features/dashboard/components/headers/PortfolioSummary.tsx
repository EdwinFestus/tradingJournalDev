import Grid from "@mui/material/Grid";
import {
    Wallet,
    Landmark,
    TrendingUp,
    Flame,
} from "lucide-react";

import MetricCard from "../../../../shared/ui/MetricCard";

import type { PortfolioSummary } from "../../types/dashboard.types";

interface Props {
    portfolio: PortfolioSummary;
}

export default function PortfolioSummary({
    portfolio,
}: Props) {
    return (
        <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 3 }}>
                <MetricCard
                    title="Balance"
                    value={`$${portfolio.balance.toFixed(2)}`}
                    subtitle="Account Balance"
                    icon={<Wallet size={24} />}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <MetricCard
                    title="Equity"
                    value={`$${portfolio.equity.toFixed(2)}`}
                    subtitle="Current Equity"
                    icon={<Landmark size={24} />}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <MetricCard
                    title="Net Profit"
                    value={`$${portfolio.netProfit.toFixed(2)}`}
                    subtitle="Overall Performance"
                    icon={<TrendingUp size={24} />}
                    color="success.main"
                />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
                <MetricCard
                    title="Current Streak"
                    value="🔥 0"
                    subtitle="Winning Streak"
                    icon={<Flame size={24} />}
                    color="warning.main"
                />
            </Grid>
        </Grid>
    );
}