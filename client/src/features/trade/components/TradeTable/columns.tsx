import type { GridColDef } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";

import type { Trade } from "../../types/trade";

export const tradeColumns: GridColDef<Trade>[] = [
  {
    field: "pair",
    headerName: "Pair",
    flex: 1,
    minWidth: 120,
  },
  {
    field: "orderType",
    headerName: "Side",
    width: 100,
  },
  {
    field: "strategy",
    headerName: "Strategy",
    flex: 1,
    minWidth: 160,
  },
  {
    field: "timeframe",
    headerName: "TF",
    width: 90,
  },
  {
    field: "rrRatio",
    headerName: "RR",
    width: 90,
    valueFormatter: ({ value }) =>
      Number(value).toFixed(2),
  },
  {
    field: "profitLoss",
    headerName: "P/L",
    width: 120,
    valueFormatter: ({ value }) =>
      Number(value).toFixed(2),
  },
  {
    field: "outcome",
    headerName: "Outcome",
    width: 130,
    renderCell: ({ value }) => (
      <Chip
        size="small"
        label={value}
        color={
          value === "WIN"
            ? "success"
            : value === "LOSS"
            ? "error"
            : value === "OPEN"
            ? "warning"
            : "default"
        }
      />
    ),
  },
];