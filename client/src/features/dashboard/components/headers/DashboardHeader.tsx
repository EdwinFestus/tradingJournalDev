import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

import PageHeader from "../../../../shared/ui/PageHeader";
import PortfolioSummary from "./PortfolioSummary";

import type { PortfolioSummary as Portfolio } from "../../types/dashboard.types";

interface DashboardHeaderProps {
    portfolio: Portfolio;
    onRefresh: () => void;
}

export default function DashboardHeader({
    portfolio,
    onRefresh,
}: DashboardHeaderProps) {
    return (
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
        >
            <Stack mt={2}>
                <PortfolioSummary portfolio={portfolio} />
            </Stack>
        </PageHeader>
    );
}