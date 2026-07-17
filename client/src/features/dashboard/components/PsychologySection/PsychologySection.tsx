import Grid from "@mui/material/Grid";

import Section from "../../../../shared/ui/Section";

import PsychologyTrendCard from "./PsychologyTrendCard";
import PsychologyDistributionCard from "./PsychologyDistributionCard";
import BestMoodCard from "./BestMoodCard";
import WorstMoodCard from "./WorstMoodCard";
import PsychologyInsights from "./PsychologyInsights";

import type {
    PsychologySectionProps,
} from "./PsychologySection.types";

export default function PsychologySection({
    analytics,
}: PsychologySectionProps) {
    return (
        <Section
            title="Psychology"
            subtitle="Analyze your emotional trading performance."
        >
            <Grid
                container
                spacing={3}
            >
                <Grid size={{ xs: 12, lg: 8 }}>
                    <PsychologyTrendCard
                        analytics={analytics}
                    />
                </Grid>

                <Grid size={{ xs: 12, lg: 4 }}>
                    <PsychologyDistributionCard
                        analytics={analytics}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <BestMoodCard
                        analytics={analytics}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <WorstMoodCard
                        analytics={analytics}
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <PsychologyInsights
                        analytics={analytics}
                    />
                </Grid>
            </Grid>
        </Section>
    );
}