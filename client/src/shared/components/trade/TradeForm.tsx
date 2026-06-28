import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";

import { useTradeStore } from "../../store/tradeStore";
import {
  tradeSchema,
  type TradeFormData,
} from "../../validation/tradeSchema";

interface Props {
  onSuccess: () => void;
}

const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
  },
};

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Pair"
            fullWidth
            sx={inputSx}
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
            sx={inputSx}
            {...register("orderType")}
          >
            <MenuItem value="BUY">BUY</MenuItem>
            <MenuItem value="SELL">SELL</MenuItem>
          </TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            select
            fullWidth
            label="Timeframe"
            defaultValue="15M"
            sx={inputSx}
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

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Strategy"
            fullWidth
            sx={inputSx}
            {...register("strategy")}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            label="Entry"
            type="number"
            fullWidth
            sx={inputSx}
            {...register("entry")}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            label="Stop loss"
            type="number"
            fullWidth
            sx={inputSx}
            {...register("stopLoss")}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            label="Take profit"
            type="number"
            fullWidth
            sx={inputSx}
            {...register("takeProfit")}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Lot size"
            type="number"
            fullWidth
            sx={inputSx}
            {...register("lotSize")}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            label="Notes"
            multiline
            rows={4}
            fullWidth
            sx={inputSx}
            {...register("notes")}
          />
        </Grid>

        <Grid size={12}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isSubmitting}
            sx={{
              borderRadius: 2,
              backgroundColor: "#111827",
              boxShadow: "none",
              height: 44,
              mt: 1,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1f2937",
                boxShadow: "none",
              },
            }}
          >
            Save trade
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
