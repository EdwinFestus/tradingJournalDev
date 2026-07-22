import {
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import type { UseFormRegister, FieldErrors } from "react-hook-form";

import type { TradeFormData } from "../../../validation/tradeSchema";

import {
  ACCOUNT_TYPES,
  ASSET_CLASSES,
  SOURCES,
} from "../../../constants/tradeConstants";

interface Props {
  register: UseFormRegister<TradeFormData>;
  errors: FieldErrors<TradeFormData>;
}

const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
  },
};

export default function TradeInformationSection({
  register,
  errors,
}: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        border: "1px solid #e5e7eb",
        borderRadius: 3,
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={3}
      >
        Trade Information
      </Typography>

      <Grid container spacing={2}>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Broker"
            fullWidth
            sx={inputSx}
            {...register("broker")}
            error={!!errors.broker}
            helperText={errors.broker?.message}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Account Number"
            fullWidth
            sx={inputSx}
            {...register("accountNumber")}
            error={!!errors.accountNumber}
            helperText={errors.accountNumber?.message}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            select
            label="Account Type"
            fullWidth
            defaultValue={ACCOUNT_TYPES[0]}
            sx={inputSx}
            {...register("accountType")}
          >
            {ACCOUNT_TYPES.map((item) => (
              <MenuItem
                key={item}
                value={item}
              >
                {item}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            select
            label="Source"
            fullWidth
            defaultValue={SOURCES[0]}
            sx={inputSx}
            {...register("source")}
          >
            {SOURCES.map((item) => (
              <MenuItem
                key={item}
                value={item}
              >
                {item}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            select
            label="Asset Class"
            fullWidth
            defaultValue={ASSET_CLASSES[0]}
            sx={inputSx}
            {...register("assetClass")}
          >
            {ASSET_CLASSES.map((item) => (
              <MenuItem
                key={item}
                value={item}
              >
                {item}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid size={12}>
          <TextField
            label="Trading Pair"
            fullWidth
            sx={inputSx}
            {...register("pair")}
            error={!!errors.pair}
            helperText={errors.pair?.message}
          />
        </Grid>

      </Grid>
    </Paper>
  );
}