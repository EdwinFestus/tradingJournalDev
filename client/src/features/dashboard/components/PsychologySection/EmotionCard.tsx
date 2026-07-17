import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

import MetricCard from "../../../../shared/ui/Cards/MetricCard";

import type { DashboardAnalytics } from "../../types/dashboard.types";

interface Props {
    analytics: DashboardAnalytics;
}

export default function EmotionCard({
    analytics,
}: Props) {

    const bestMood =
        analytics.psychology?.[0];

    return (
        <MetricCard
            title="Best Emotion"
            value={bestMood?.mood ?? "N/A"}
            subtitle={
                bestMood
                    ? `${bestMood.winRate.toFixed(1)}% Win Rate`
                    : "No Data"
            }
            icon={<FavoriteRoundedIcon />}
            color="success.main"
        />
    );
}