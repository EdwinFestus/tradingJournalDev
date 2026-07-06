import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TimelineIcon from "@mui/icons-material/Timeline";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import {
    Box,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import DashboardCard from "../cards/DashboardCard";

import type {
    PerformanceAnalytics,
} from "../../types/dashboard.types";

interface PerformanceOverviewProps {
    performance: PerformanceAnalytics;
}

interface MetricItemProps {
    title: string;
    value: string;
    icon: React.ReactNode;
    color: string;
}

function MetricItem({
    title,
    value,
    icon,
    color,
}: MetricItemProps) {
    return (
        <Box
            sx={{
                p: 2.5,
                borderRadius: 2,
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
                        width: 42,
                        height: 42,
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
                fontWeight={700}
            >
                {value}
            </Typography>
        </Box>
    );
}

export default function PerformanceOverview({
    performance,
}: PerformanceOverviewProps) {

    return (

        <DashboardCard
            title="Performance Overview"
            subtitle="Trading performance statistics"
            height="auto"
        >

            <Grid
                container
                spacing={2}
            >

                <Grid size={{ xs: 12, sm: 6, lg: 4 }}>

                    <MetricItem
                        title="Average Win"
                        value={`$${performance.averageWin.toFixed(2)}`}
                        icon={<TrendingUpIcon />}
                        color="#22C55E"
                    />

                </Grid>

                <Grid size={{ xs: 12, sm: 6, lg: 4 }}>

                    <MetricItem
                        title="Average Loss"
                        value={`$${performance.averageLoss.toFixed(2)}`}
                        icon={<TrendingDownIcon />}
                        color="#EF4444"
                    />

                </Grid>

                <Grid size={{ xs: 12, sm: 6, lg: 4 }}>

                    <MetricItem
                        title="Average RR"
                        value={performance.averageRR.toFixed(2)}
                        icon={<TimelineIcon />}
                        color="#3B82F6"
                    />

                </Grid>

                <Grid size={{ xs: 12, sm: 6, lg: 6 }}>

                    <MetricItem
                        title="Largest Win"
                        value={`$${performance.largestWin.toFixed(2)}`}
                        icon={<EmojiEventsIcon />}
                        color="#22C55E"
                    />

                </Grid>

                <Grid size={{ xs: 12, sm: 6, lg: 6 }}>

                    <MetricItem
                        title="Largest Loss"
                        value={`$${performance.largestLoss.toFixed(2)}`}
                        icon={<TrendingDownIcon />}
                        color="#EF4444"
                    />

                </Grid>

            </Grid>

        </DashboardCard>

    );

}