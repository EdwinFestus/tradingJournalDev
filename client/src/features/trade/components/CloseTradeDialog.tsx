import { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";

import { closeTrade } from "../../../shared/services/tradeService";
import { useTradeStore } from "../../../shared/store/tradeStore";

interface CloseTradeDialogProps {
  open: boolean;
  tradeId: string;
  onClose: () => void;
}

export default function CloseTradeDialog({
  open,
  tradeId,
  onClose,
}: CloseTradeDialogProps) {
  const fetchTrades = useTradeStore(
    (state) => state.fetchTrades
  );

  const [exitPrice, setExitPrice] = useState("");
  const [commission, setCommission] = useState("");
  const [slippage, setSlippage] = useState("");
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setExitPrice("");
    setCommission("");
    setSlippage("");
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await closeTrade(tradeId, {
        exitPrice: Number(exitPrice),
        commission: Number(commission || 0),
        slippage: Number(slippage || 0),
      });

     await fetchTrades();
            resetForm();
            onClose();

    } catch (error: unknown) {
      console.error("Failed to close trade:", error);

      alert("Unable to close trade. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={(_, reason) => {
        if (loading) return;
        if (reason === "backdropClick") return;
        onClose();
      }}

      fullWidth
      maxWidth="xs"
    >
      <DialogTitle>
        Close Trade
      </DialogTitle>

      <DialogContent>
        <Stack
          spacing={3}
          sx={{ mt: 2 }}
        >
          <TextField
            label="Exit Price"
            type="number"
            fullWidth
            required
            disabled={loading}
            value={exitPrice}
            onChange={(e) =>
              setExitPrice(e.target.value)
            }
            
          />

          <TextField
            label="Commission"
            type="number"
            fullWidth
            disabled={loading}
            value={commission}
            onChange={(e) =>
              setCommission(e.target.value)
            }
           slotProps={{
              htmlInput: {
                min: 0,
                step: "0.01",
              },
            }}
          />

          <TextField
            label="Slippage"
            type="number"
            fullWidth
            disabled={loading}
            value={slippage}
            onChange={(e) =>
              setSlippage(e.target.value)
            }
            slotProps={{
                htmlInput: {
                  min: 0,
                  step: 0.01,
                },
              }}
          />
        </Stack>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
            color="inherit"
            onClick={() => {
              resetForm();
              onClose();
            }}
          >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={
            loading ||
            Number(exitPrice) <= 0
          }
        >
          {loading
            ? "Closing..."
            : "Close Trade"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}