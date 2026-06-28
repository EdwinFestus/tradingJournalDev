import {
  DeleteOutlined,
  Edit,
  Visibility,
} from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

import type { Trade } from "../../types/trade";

interface TradeActionsProps {
  trade: Trade;
}

export default function TradeActions({ trade }: TradeActionsProps) {
  return (
    <div className="flex gap-1">
      <Tooltip title={`View ${trade.pair}`}>
        <IconButton size="small" aria-label={`View ${trade.pair}`}>
          <Visibility fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title={`Edit ${trade.pair}`}>
        <IconButton size="small" aria-label={`Edit ${trade.pair}`}>
          <Edit fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title={`Delete ${trade.pair}`}>
        <IconButton
          size="small"
          color="error"
          aria-label={`Delete ${trade.pair}`}
        >
          <DeleteOutlined fontSize="small" />
        </IconButton>
      </Tooltip>
    </div>
  );
}
