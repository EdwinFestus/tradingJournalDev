import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";

import MetricCard from "../../../../shared/ui/Cards/MetricCard";

import type {
    DashboardAnalytics,
} from "../../types/dashboard.types";

interface Props {
    analytics: DashboardAnalytics;
}

export default function BestMoodCard({
    analytics,
}: Props) {

    const moods = [...analytics.psychology];

    if (moods.length === 0) {

        return (
            <MetricCard
                title="Best Mood"
                value="N/A"
                subtitle="No data available"
                icon={<SentimentSatisfiedRoundedIcon />}
            />
        );

    }

    const bestMood =
        moods.sort(
            (a, b) => b.winRate - a.winRate
        )[0];

    return (
        <MetricCard
            title="Best Mood"
            value={bestMood.mood}
            subtitle={`${bestMood.winRate.toFixed(1)}% Win Rate`}
            icon={<SentimentSatisfiedRoundedIcon />}
            color="success.main"
        />
    );
}