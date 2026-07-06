import { Stack } from "@mui/material";

import PerformanceOverview from "../shared/PerformanceOverview";
import RiskOverview from "../shared/RiskOverview";

import type {
    DashboardAnalytics as DashboardAnalyticsType,
} from "../../types/dashboard.types";

interface DashboardAnalyticsProps {
    analytics: DashboardAnalyticsType;
}

export default function DashboardAnalytics({
    analytics,
}: DashboardAnalyticsProps) {
    return (
        <Stack
            spacing={3}
            sx={{ mb: 4 }}
        >
            <PerformanceOverview
                performance={analytics.performance}
            />

            <RiskOverview
                risk={analytics.risk}
            />
        </Stack>
    );
}