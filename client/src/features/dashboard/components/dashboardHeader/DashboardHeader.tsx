import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

import PageHeader from "@/shared/ui/PageHeader";
import PortfolioSummary from "./PortfolioSummary";

import type {
    PortfolioSummary as PortfolioSummaryType,
} from "../../types/dashboard.types";

/**
 * -----------------------------------------------------------------------------
 * DashboardHeader
 * -----------------------------------------------------------------------------
 * Purpose:
 * Displays the dashboard page header together with the portfolio summary.
 *
 * Responsibilities:
 * - Render the dashboard title and description
 * - Provide dashboard-level actions
 * - Display the portfolio overview
 * -----------------------------------------------------------------------------
 */

interface DashboardHeaderProps {
    /** Portfolio metrics displayed beneath the page header */
    portfolioSummary: PortfolioSummaryType;

    /** Refresh dashboard analytics */
    onRefresh: () => void;

    /** Optional loading state while refreshing */
    isRefreshing?: boolean;
}

export default function DashboardHeader({
    portfolioSummary,
    onRefresh,
    isRefreshing = false,
}: DashboardHeaderProps) {
    return (
        <Stack spacing={4} mb={4}>
            {/* -----------------------------------------------------------------
                Dashboard Page Header
            ------------------------------------------------------------------ */}
            <PageHeader
                title="Dashboard"
                subtitle="Monitor your portfolio, trading performance and analytics."
                actions={
                    <Button
                        variant="contained"
                        startIcon={<RefreshRoundedIcon />}
                        onClick={onRefresh}
                        disabled={isRefreshing}
                    >
                        {isRefreshing ? "Refreshing..." : "Refresh"}
                    </Button>
                }
            />

            {/* -----------------------------------------------------------------
                Portfolio Summary
            ------------------------------------------------------------------ */}
            <PortfolioSummary portfolio={portfolioSummary} />
        </Stack>
    );
}