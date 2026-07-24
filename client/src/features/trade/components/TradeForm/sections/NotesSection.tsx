import Grid from "@mui/material/Grid";

import FormSection from "@/shared/ui/form/FormSection";
import FormTextarea from "@/shared/ui/form/FormTextarea";

export default function NotesSection() {
  return (
    <FormSection title="Trade Notes">
      <Grid container spacing={2}>
        <Grid size={12}>
          <FormTextarea
            name="notes"
            label="Trade Notes"
            placeholder="Describe your setup, confirmations, execution, management, emotions, lessons learned, and any observations..."
            rows={6}
          />
        </Grid>
      </Grid>
    </FormSection>
  );
}