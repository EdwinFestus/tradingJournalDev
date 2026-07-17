import Grid from "@mui/material/Grid";

import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";

import MetricCard from "@/shared/ui/Cards/MetricCard";

import type {
    PortfolioSummary as PortfolioSummaryType,
} from "../../types/dashboard.types";

import formatCurrency from "../../utils/formatCurrency";

/**
 * -----------------------------------------------------------------------------
 * Portfolio Summary
 * -----------------------------------------------------------------------------
 * Purpose:
 * Displays the user's portfolio overview at the top of the dashboard.
 *
 * Responsibilities:
 * - Display Balance
 * - Display Equity
 * - Display Net Profit
 * -----------------------------------------------------------------------------
 */

interface PortfolioSummaryProps {
    portfolio: PortfolioSummaryType;
}

export default function PortfolioSummary({
    portfolio,
}: PortfolioSummaryProps) {
    /**
     * -------------------------------------------------------------------------
     * Portfolio metric configuration.
     * Keeping the card definitions in one place makes it easy to
     * add, remove or reorder cards later.
     * -------------------------------------------------------------------------
     */
    const metrics = [
        {
            title: "Balance",
            value: formatCurrency(portfolio.balance),
            subtitle: "Account Balance",
            icon: <AccountBalanceWalletRoundedIcon />,
        },
        {
            title: "Equity",
            value: formatCurrency(portfolio.equity),
            subtitle: "Current Equity",
            icon: <ShowChartRoundedIcon />,
        },
        {
            title: "Net Profit",
            value: formatCurrency(portfolio.netProfit),
            subtitle: "Overall Performance",
            icon: <TrendingUpRoundedIcon />,
            color:
                portfolio.netProfit >= 0
                    ? "success.main"
                    : "error.main",
        },
    ];

    return (
        <Grid
            container
            spacing={3}
            sx={{
                width: "100%",
            }}
        >
            {metrics.map((metric) => (
                <Grid
                    key={metric.title}
                    size={{
                        xs: 12,
                        sm: 6,
                        md: 4,
                    }}
                >
                    <MetricCard
                        title={metric.title}
                        value={metric.value}
                        subtitle={metric.subtitle}
                        icon={metric.icon}
                        color={metric.color}
                    />
                </Grid>
            ))}
        </Grid>
    );
}