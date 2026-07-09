import { Section } from "../../../../../shared/ui";
import  StatsGrid  from "./StatsGrid.tsx";

import type { DashboardOverview } from "../../../types/dashboard.types";

interface DashboardStatsProps {
    overview: DashboardOverview;
}

export default function DashboardStats({
    overview,
}: DashboardStatsProps) {
    return (
        <Section
            title="Performance Overview"
            subtitle="Key trading metrics at a glance"
        >
            <StatsGrid overview={overview} />
        </Section>
    );
}