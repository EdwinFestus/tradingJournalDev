import Grid from "@mui/material/Grid";

import TrendingUpRounded from "@mui/icons-material/TrendingUpRounded";
import AccountBalanceWalletRounded from "@mui/icons-material/AccountBalanceWalletRounded";
import ShowChartRounded from "@mui/icons-material/ShowChartRounded";

import MetricCard from "@/shared/ui/Cards/MetricCard";

import formatCurrency from "@/features/dashboard/utils/formatCurrency";

import type {
    PortfolioSummary as Portfolio,
} from "@/features/dashboard/types/dashboard.types";

interface PortfolioSummaryProps {
    portfolio: Portfolio;
}

export default function PortfolioSummary({
    portfolio,
}: PortfolioSummaryProps) {
    return (
        <Grid
            container
            spacing={3}
            sx={{ width: "100%" }}
        >
            <Grid size={{ xs: 12, md: 4 }}>
                <MetricCard
                    title="Account Balance"
                    value={formatCurrency(portfolio.balance)}
                    subtitle="Available Balance"
                    icon={<AccountBalanceWalletRounded />}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
                <MetricCard
                    title="Current Equity"
                    value={formatCurrency(portfolio.equity)}
                    subtitle="Real-time Equity"
                    icon={<ShowChartRounded />}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
                <MetricCard
                    title="Net Profit"
                    value={formatCurrency(portfolio.netProfit)}
                    subtitle="Overall Performance"
                    icon={<TrendingUpRounded />}
                    color={
                        portfolio.netProfit >= 0
                            ? "success.main"
                            : "error.main"
                    }
                />
            </Grid>
        </Grid>
    );
}