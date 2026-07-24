import Grid from "@mui/material/Grid";

import FormSection from "@/shared/ui/form/FormSection";
import FormSelect from "@/shared/ui/form/FormSelect";
import FormTextField from "@/shared/ui/form/FormTextField";

import {
  ACCOUNT_TYPES,
  ASSET_CLASSES,
  SOURCES,
} from "../../../constants/tradeConstants";

export default function TradeInformationSection() {
  return (
    <FormSection title="Trade Information">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <FormTextField
            name="broker"
            label="Broker"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <FormTextField
            name="accountNumber"
            label="Account Number"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <FormSelect
            name="accountType"
            label="Account Type"
            options={ACCOUNT_TYPES.map((value) => ({
              label: value,
              value,
            }))}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <FormSelect
            name="source"
            label="Source"
            options={SOURCES.map((value) => ({
              label: value,
              value,
            }))}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <FormSelect
            name="assetClass"
            label="Asset Class"
            options={ASSET_CLASSES.map((value) => ({
              label: value,
              value,
            }))}
          />
        </Grid>

        <Grid size={12}>
          <FormTextField
            name="pair"
            label="Trading Pair"
          />
        </Grid>
      </Grid>
    </FormSection>
  );
}