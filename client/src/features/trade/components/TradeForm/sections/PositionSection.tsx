import Grid from "@mui/material/Grid";

import FormSection from "@/shared/ui/form/FormSection";
import FormNumberField from "@/shared/ui/form/FormNumberField";

export default function PositionSection() {
  return (
    <FormSection title="Position Management">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <FormNumberField
            name="entry"
            label="Entry Price"
            min={0}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <FormNumberField
            name="lotSize"
            label="Lot Size"
            min={0}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <FormNumberField
            name="stopLoss"
            label="Stop Loss"
            min={0}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <FormNumberField
            name="takeProfit"
            label="Take Profit"
            min={0}
          />
        </Grid>
      </Grid>
    </FormSection>
  );
}