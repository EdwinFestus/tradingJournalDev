import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import AppCard from "../../../../shared/ui/Cards/AppCard";

import type {
    DashboardAnalytics,
} from "../../types/dashboard.types";

interface Props {
    analytics: DashboardAnalytics;
}

export default function PsychologyInsights({
    analytics,
}: Props) {

    if (analytics.psychology.length === 0) {

        return (
            <AppCard
                title="Psychology Insights"
            >
                <Typography>
                    No psychology data available.
                </Typography>
            </AppCard>
        );

    }

    const sorted = [...analytics.psychology].sort(
        (a, b) => b.winRate - a.winRate
    );

    const best = sorted[0];
    const worst = sorted[sorted.length - 1];

    return (
        <AppCard
            title="Psychology Insights"
            subtitle="Behavioral analysis"
        >
            <Stack spacing={2}>

                <Typography>
                    • Highest win rate occurs when trading while <strong>{best.mood}</strong>.
                </Typography>

                <Typography>
                    • Lowest win rate occurs during <strong>{worst.mood}</strong>.
                </Typography>

                <Typography>
                    • Focus on repeating emotional states that consistently produce profitable trades.
                </Typography>

                <Typography>
                    • Avoid entering trades immediately after emotionally driven losses.
                </Typography>

            </Stack>
        </AppCard>
    );
}