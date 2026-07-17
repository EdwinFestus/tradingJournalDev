import SentimentVeryDissatisfiedRoundedIcon
from "@mui/icons-material/SentimentVeryDissatisfiedRounded";

import MetricCard from "../../../../shared/ui/Cards/MetricCard";

import type {
    DashboardAnalytics,
} from "../../types/dashboard.types";

interface Props {
    analytics: DashboardAnalytics;
}

export default function WorstMoodCard({
    analytics,
}: Props) {

    const moods = [...analytics.psychology];

    if (moods.length === 0) {

        return (
            <MetricCard
                title="Worst Mood"
                value="N/A"
                subtitle="No data available"
                icon={<SentimentVeryDissatisfiedRoundedIcon />}
            />
        );

    }

    const worstMood =
        moods.sort(
            (a, b) => a.winRate - b.winRate
        )[0];

    return (
        <MetricCard
            title="Worst Mood"
            value={worstMood.mood}
            subtitle={`${worstMood.winRate.toFixed(1)}% Win Rate`}
            icon={<SentimentVeryDissatisfiedRoundedIcon />}
            color="error.main"
        />
    );
}