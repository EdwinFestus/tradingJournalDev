import Chip from "@mui/material/Chip";
import type { GridColDef } from "@mui/x-data-grid";

import type { Trade } from "../../types/trade";
import ActionCell from "./ActionCell";

interface TradeColumnActions {
  onView?: (trade: Trade) => void;
  onEdit?: (trade: Trade) => void;
  onDelete?: (trade: Trade) => void;
}

const formatNumber = (value: unknown): string => {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return "-";
  }

  return number.toFixed(2);
};

export const getTradeColumns = ({
  onView,
  onEdit,
  onDelete,
}: TradeColumnActions): GridColDef<Trade>[] => [
  {
    field: "pair",
    headerName: "Pair",
    flex: 1,
    minWidth: 170,
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
    minWidth: 180,
  },
  {
    field: "timeframe",
    headerName: "TF",
    width: 90,
  },

  {
  field: "rrRatio",
  headerName: "RR",
  width: 100,
  renderCell: (params) => {
    console.log("RR Row:", params.row);
    console.log("RR Value:", params.row.rrRatio);

    return <>{params.row.rrRatio}</>;
  },
},

  {
    field: "profitLoss",
    headerName: "P/L",
    width: 120,
    align: "right",
    headerAlign: "right",

    renderCell: (params) => {
      return formatNumber(params.row.profitLoss);
    },
  },

  {
    field: "outcome",
    headerName: "Outcome",
    width: 120,

    renderCell: (params) => {
      const outcome =
        params.row.outcome ??
        params.row.status ??
        "OPEN";

      return (
        <Chip
          size="small"
          label={outcome}
          color={
            outcome === "WIN"
              ? "success"
              : outcome === "LOSS"
              ? "error"
              : outcome === "OPEN"
              ? "warning"
              : "default"
          }
        />
      );
    },
  },

  {
    field: "actions",
    headerName: "",
    width: 70,
    sortable: false,
    filterable: false,
    align: "center",
    headerAlign: "center",

    renderCell: ({ row }) => (
      <ActionCell
        onView={() => onView?.(row)}
        onEdit={() => onEdit?.(row)}
        onDelete={() => onDelete?.(row)}
      />
    ),
  },
];