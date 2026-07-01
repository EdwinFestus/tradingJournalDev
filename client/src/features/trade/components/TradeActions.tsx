import { useState } from "react";

import {
  CheckCircleOutlined,
  DeleteOutlined,
  Edit,
  Visibility,
} from "@mui/icons-material";

import { IconButton, Tooltip } from "@mui/material";

import CloseTradeDialog from "./CloseTradeDialog";

import type { Trade } from "../../../shared/types/trade";

interface TradeActionsProps {
  trade: Trade;
}

export default function TradeActions({
  trade,
}: TradeActionsProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-1">
      <Tooltip title={`View ${trade.pair}`}>
        <IconButton size="small">
          <Visibility fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title={`Edit ${trade.pair}`}>
        <IconButton size="small">
          <Edit fontSize="small" />
        </IconButton>
      </Tooltip>

      {trade.outcome === "OPEN" && (
        <Tooltip title="Close Trade">
          <IconButton
            size="small"
            color="success"
            onClick={() => setOpen(true)}
          >
            <CheckCircleOutlined fontSize="small" />
          </IconButton>
        </Tooltip>
      )}

      <Tooltip title={`Delete ${trade.pair}`}>
        <IconButton
          size="small"
          color="error"
        >
          <DeleteOutlined fontSize="small" />
        </IconButton>
      </Tooltip>

      <CloseTradeDialog
        open={open}
        tradeId={trade._id}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}