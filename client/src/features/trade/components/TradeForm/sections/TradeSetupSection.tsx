import Grid from "@mui/material/Grid";

import FormSection from "@/shared/ui/form/FormSection";
import FormSelect from "@/shared/ui/form/FormSelect";

import {
  MARKET_CONDITIONS,
  ORDER_TYPES,
  STRATEGIES,
  TIMEFRAMES,
} from "../../../constants/tradeConstants";

export default function TradeSetupSection() {
  return (
    <FormSection title="Trade Setup">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <FormSelect
            name="orderType"
            label="Order Type"
            options={ORDER_TYPES.map((value) => ({
              label: value,
              value,
            }))}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <FormSelect
            name="timeframe"
            label="Timeframe"
            options={TIMEFRAMES.map((value) => ({
              label: value,
              value,
            }))}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <FormSelect
            name="strategy"
            label="Strategy"
            options={STRATEGIES.map((value) => ({
              label: value,
              value,
            }))}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <FormSelect
            name="marketCondition"
            label="Market Condition"
            options={MARKET_CONDITIONS.map((value) => ({
              label: value,
              value,
            }))}
          />
        </Grid>
      </Grid>
    </FormSection>
  );
}