import type { GridColDef } from "@mui/x-data-grid";
import StatusChip from "./StatusChip";
import TradeActions from "./TradeActions";

export const tradeColumns: GridColDef[] = [
  {
    field: "pair",
    headerName: "Pair",
    flex: 1,
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
  },
  {
    field: "rrRatio",
    headerName: "R:R",
    width: 100,
  },
  {
    field: "rewardAmount",
    headerName: "Result ($)",
    width: 120,
  },
  {
    field: "Outcome",
    headerName: "Status",
    width: 140,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      console.log(params.row.outcome);
      return <StatusChip status={params.row.outcome} />
    },
  },

    {
        field: "actions",
        headerName: "Actions",
        width: 140,
        sortable: false,
        filterable: false,
        renderCell: (params) => <TradeActions trade={params.row} />,
    }
];