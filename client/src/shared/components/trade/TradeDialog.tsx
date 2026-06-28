import { Add } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

import TradeForm from "./TradeForm";

export default function TradeDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={() => setOpen(true)}
        sx={{
          borderRadius: 2,
          backgroundColor: "#111827",
          boxShadow: "none",
          height: 44,
          px: 2,
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#1f2937",
            boxShadow: "none",
          },
        }}
      >
        New trade
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="md"
        slotProps={{
          paper: {
            sx: {
              borderRadius: 2,
            },
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: 700, pb: 1 }}>
          Create new trade
        </DialogTitle>

        <DialogContent dividers sx={{ borderColor: "#e5e7eb" }}>
          <TradeForm
            onSuccess={() => setOpen(false)}
          />
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button
            onClick={() => setOpen(false)}
            sx={{
              borderRadius: 2,
              color: "#475569",
              textTransform: "none",
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
