import SecurityIcon from "@mui/icons-material/Security";
import SavingsIcon from "@mui/icons-material/Savings";
import BalanceIcon from "@mui/icons-material/Balance";
import PaidIcon from "@mui/icons-material/Paid";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import {
    Box,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import DashboardCard from "../cards/DashboardCard";

import type { RiskAnalytics } from "../../types/dashboard.types";

interface RiskOverviewProps {
    risk: RiskAnalytics;
}

interface RiskMetricProps {
    title: string;
    value: string;
    icon: React.ReactNode;
    color: string;
}

function RiskMetric({
    title,
    value,
    icon,
    color,
}: RiskMetricProps) {
    return (
        <Box
            sx={{
                p: 2.5,
                borderRadius: 3,
                bgcolor: "background.default",
                border: 1,
                borderColor: "divider",
                height: "100%",
            }}
        >
            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ mb: 2 }}
            >
                <Box
                    sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        bgcolor: `${color}20`,
                        color,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {icon}
                </Box>

                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    {title}
                </Typography>
            </Stack>

            <Typography
                variant="h5"
                sx={{
                    fontWeight: 700,
                }}
            >
                {value}
            </Typography>
        </Box>
    );
}

export default function RiskOverview({
    risk,
}: RiskOverviewProps) {
    return (
        <DashboardCard
            title="Risk Overview"
            subtitle="Risk & reward management"
            height="auto"
        >
            <Grid
                container
                spacing={2}
            >
                <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
                    <RiskMetric
                        title="Average Risk"
                        value={`$${risk.averageRisk.toFixed(2)}`}
                        icon={<SecurityIcon />}
                        color="#EF4444"
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
                    <RiskMetric
                        title="Average Reward"
                        value={`$${risk.averageReward.toFixed(2)}`}
                        icon={<SavingsIcon />}
                        color="#22C55E"
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
                    <RiskMetric
                        title="Average R:R"
                        value={risk.averageRR.toFixed(2)}
                        icon={<BalanceIcon />}
                        color="#3B82F6"
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
                    <RiskMetric
                        title="Total Risk"
                        value={`$${risk.totalRisk.toFixed(2)}`}
                        icon={<PaidIcon />}
                        color="#F97316"
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
                    <RiskMetric
                        title="Total Reward"
                        value={`$${risk.totalReward.toFixed(2)}`}
                        icon={<TrendingUpIcon />}
                        color="#14B8A6"
                    />
                </Grid>
            </Grid>
        </DashboardCard>
    );
}