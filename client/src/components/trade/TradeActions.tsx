import type { Trade } from "../../types/trade"
import { IconButton, Tooltip } from "@mui/material";

import {
  Visibility,
  Edit,
  DeleteOutlined,
} from "@mui/icons-material";


interface TradeActionsProps {
  trade: Trade;
}

export default function TradeActions({trade}: TradeActionsProps) {
  console.log( trade )
  return (
    <div className="flex gap-1">
      <Tooltip title="View Trade">
        <IconButton size="small">
          <Visibility fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Edit Trade">
        <IconButton size="small">
          <Edit fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete Trade">
        <IconButton size="small" color="error">
          <DeleteOutlined fontSize="small" />
        </IconButton>
      </Tooltip>
    </div>
  );
}