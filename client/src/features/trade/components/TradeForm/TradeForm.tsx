import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Alert,
  Button,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";

import { useTradeStore } from "@/features/trade/store/tradeStore";
import {
  tradeSchema,
  type TradeFormData,
} from "@/features/trade/validation/tradeSchema";

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

  const [submitError, setSubmitError] =
    useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<TradeFormData>({
    resolver: zodResolver(tradeSchema),
  });

  const onSubmit = async (
    data: TradeFormData
  ) => {
    setSubmitError("");

    // console.log("Trade form submitted:", data); 

    try {
      console.log("Submitting Trade:", data);

      await createTrade(data);


        console.log("Trade created successfully");

      reset();

      onSuccess();
    } catch (error) {
      console.error(error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to create trade."
      );
        console.error("Create trade failed:", error);
    }
  };

  return (
    <form
        onSubmit={handleSubmit(
            onSubmit,
            (errors) => {
            console.log("VALIDATION FAILED");
            console.log(errors);
            }
        )}
        >
      <Grid container spacing={2}>

        {submitError && (
          <Grid size={12}>
            <Alert severity="error">
              {submitError}
            </Alert>
          </Grid>
        )}

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
            label="Direction"
            defaultValue="BUY"
            fullWidth
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
            label="Timeframe"
            defaultValue="15M"
            fullWidth
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
            {...register("entry", {
              valueAsNumber: true,
            })}
            error={!!errors.entry}
            helperText={errors.entry?.message}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            label="Stop Loss"
            type="number"
            fullWidth
            sx={inputSx}
            {...register("stopLoss", {
              valueAsNumber: true,
            })}
            error={!!errors.stopLoss}
            helperText={errors.stopLoss?.message}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            label="Take Profit"
            type="number"
            fullWidth
            sx={inputSx}
            {...register("takeProfit", {
              valueAsNumber: true,
            })}
            error={!!errors.takeProfit}
            helperText={errors.takeProfit?.message}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Lot Size"
            type="number"
            fullWidth
            sx={inputSx}
            {...register("lotSize", {
              valueAsNumber: true,
            })}
            error={!!errors.lotSize}
            helperText={errors.lotSize?.message}
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
            {isSubmitting
              ? "Saving..."
              : "Save Trade"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}