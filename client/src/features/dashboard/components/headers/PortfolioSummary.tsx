import Stack from "@mui/material/Stack";


import TrendingUpRounded from "@mui/icons-material/TrendingUpRounded";
import AccountBalanceWalletRounded from "@mui/icons-material/AccountBalanceWalletRounded";
import ShowChartRounded from "@mui/icons-material/ShowChartRounded";

import MetricCard from "../../../../shared/ui/Cards/MetricCard";

import type {
    PortfolioSummary as Portfolio,
} from "../../types/dashboard.types";

import  formatCurrency  from "../../utils/formatCurrency";

interface PortfolioSummaryProps {
    portfolio: Portfolio;
}

export default function PortfolioSummary({
    portfolio,
}: PortfolioSummaryProps) {
    return (
        <Stack
            direction={{
                xs: "column",
                md: "row",
            }}
            spacing={2}
            width="100%"
        >
            <MetricCard
                title="Balance"
                value={formatCurrency(portfolio.balance)}
                subtitle="Account Balance"
                icon={<AccountBalanceWalletRounded />}
            />

            <MetricCard
                title="Equity"
                value={formatCurrency(portfolio.equity)}
                subtitle="Current Equity"
                icon={<ShowChartRounded />}
            />

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
        </Stack>
    );
}