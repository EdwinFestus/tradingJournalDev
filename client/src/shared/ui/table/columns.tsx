import type { GridColDef } from "@mui/x-data-grid";

import StatusChip from "./StatusChip";
import TradeActions from "../../../features/trade/components/TradeActions";

export const tradeColumns: GridColDef[] = [
  {
    field: "pair",
    headerName: "Pair",
    flex: 1,
    minWidth: 120,
  },
  {
    field: "orderType",
    headerName: "Direction",
    width: 120,
  },
  {
    field: "strategy",
    headerName: "Strategy",
    flex: 1,
    minWidth: 160,
  },
  {
    field: "rrRatio",
    headerName: "R:R",
    width: 100,
    valueFormatter: (value: number) => value.toFixed(2),
  },
  {
    field: "rewardAmount",
    headerName: "Reward",
    width: 120,
    valueFormatter: (value: number) =>
      new Intl.NumberFormat("en-US", {
        currency: "USD",
        style: "currency",
      }).format(value),
  },
  {
    field: "outcome",
    headerName: "Status",
    width: 140,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <StatusChip status={params.row.outcome} />
    ),
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 140,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <TradeActions trade={params.row} />
    ),
  },
];
