import { useForm } from "react-hook-form";
import  { zodResolver } from "@hookform/resolvers/zod";

import {
  TextField,
  MenuItem,
  Button,
  Grid,
} from "@mui/material";

import  {
  tradeSchema,
 type TradeFormData,
} from "../../validation/tradeSchema";

import { useTradeStore } from "../../store/tradeStore";

interface Props {
  onSuccess: () => void;
}

export default function TradeForm({
  onSuccess,
}: Props) {

  const createTrade = useTradeStore(
    (state) => state.createTrade
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TradeFormData>({
    resolver: zodResolver(tradeSchema),
  });

  const onSubmit = async (
    data: TradeFormData
  ) => {

    await createTrade(data);

    onSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >

      <Grid container spacing={3}>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Pair"
            fullWidth
            {...register("pair")}
            error={!!errors.pair}
            helperText={errors.pair?.message}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            select
            fullWidth
            label="Direction"
            defaultValue="BUY"
            {...register("orderType")}
          >
            <MenuItem value="BUY">
              BUY
            </MenuItem>

            <MenuItem value="SELL">
              SELL
            </MenuItem>

          </TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            select
            fullWidth
            label="Timeframe"
            defaultValue="15M"
            {...register("timeframe")}
          >
            <MenuItem value="1M">1 Minute</MenuItem>
            <MenuItem value="5M">5 Minutes</MenuItem>
            <MenuItem value="15M">15 Minutes</MenuItem>
            <MenuItem value="30M">30 Minutes</MenuItem>
            <MenuItem value="1H">1 Hour</MenuItem>
            <MenuItem value="4H">4 Hours</MenuItem>
            <MenuItem value="1D">1 Day</MenuItem>
          </TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            label="Entry"
            type="number"
            fullWidth
            {...register("entry")}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            label="Stop Loss"
            type="number"
            fullWidth
            {...register("stopLoss")}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            label="Take Profit"
            type="number"
            fullWidth
            {...register("takeProfit")}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Strategy"
            fullWidth
            {...register("strategy")}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Lot Size"
            type="number"
            fullWidth
            {...register("lotSize")}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            label="Notes"
            multiline
            rows={4}
            fullWidth
            {...register("notes")}
          />
        </Grid>

        <Grid size={12}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isSubmitting}
          >
            Save Trade
          </Button>
        </Grid>

      </Grid>

    </form>
  );
}