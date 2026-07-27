import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";

import TradeForm from "../../TradeForm";

interface CreateTradeDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateTradeDialog({
  open,
  onClose,
}: CreateTradeDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Create Trade

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <TradeForm onSuccess={onClose} />
      </DialogContent>
    </Dialog>
  );
}