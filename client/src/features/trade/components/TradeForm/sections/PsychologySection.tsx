import Grid from "@mui/material/Grid";

import {
    FormSection,
    FormSelect,
    FormSlider,
    FORM_GRID_SPACING,
    FORM_SLIDER_MIN,
    FORM_SLIDER_MAX,
    FORM_SLIDER_STEP,
} from "@/shared/ui/form";

import { MOODS } from "../../../constants/tradeConstants";

const moodOptions = MOODS.map((mood) => ({
    label: mood,
    value: mood,
}));

export default function PsychologySection() {
    return (
        <FormSection
            title="Trading Psychology"
            subtitle="Record your emotional state during this trade."
        >
            <Grid container spacing={FORM_GRID_SPACING}>
                <Grid size={{ xs: 12 }}>
                    <FormSelect
                        name="psychology.mood"
                        label="Mood"
                        options={moodOptions}
                        fullWidth
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <FormSlider
                        name="psychology.confidence"
                        label="Confidence"
                        min={FORM_SLIDER_MIN}
                        max={FORM_SLIDER_MAX}
                        step={FORM_SLIDER_STEP}
                        marks
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <FormSlider
                        name="psychology.discipline"
                        label="Discipline"
                        min={FORM_SLIDER_MIN}
                        max={FORM_SLIDER_MAX}
                        step={FORM_SLIDER_STEP}
                        marks
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <FormSlider
                        name="psychology.stress"
                        label="Stress"
                        min={FORM_SLIDER_MIN}
                        max={FORM_SLIDER_MAX}
                        step={FORM_SLIDER_STEP}
                        marks
                    />
                </Grid>
            </Grid>
        </FormSection>
    );
}