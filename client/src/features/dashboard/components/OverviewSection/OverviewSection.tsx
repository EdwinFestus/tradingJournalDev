import Section from "@/shared/ui/Section";

import OverviewStats from "./OverviewStats";

import type { OverviewSectionProps } from "./OverviewSection.types";

export default function OverviewSection({
    overview,
}: OverviewSectionProps) {
    return (
        <Section
            title="Overview"
            subtitle="Key trading performance metrics"
        >
            <OverviewStats
                overview={overview}
            />
        </Section>
    );
}