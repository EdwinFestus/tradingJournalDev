import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

import PageHeader from "@/shared/ui/PageHeader";
import PortfolioSummary from "./PortfolioSummary";

import type { PortfolioSummary as Portfolio } from "@/features/dashboard/types/dashboard.types";

interface DashboardHeaderProps {
    portfolio: Portfolio;
    onRefresh: () => void;
}

export default function DashboardHeader({
    portfolio,
    onRefresh,
}: DashboardHeaderProps) {
    return (
        <Stack spacing={3} mb={4}>
            <PageHeader
                title="Dashboard"
                subtitle="Monitor your portfolio, trading performance and analytics."
                actions={
                    <Button
                        variant="contained"
                        startIcon={<RefreshRoundedIcon />}
                        onClick={onRefresh}
                    >
                        Refresh
                    </Button>
                }
            />

            <PortfolioSummary portfolio={portfolio} />
        </Stack>
    );
}