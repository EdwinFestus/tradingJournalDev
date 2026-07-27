import { useEffect, useMemo } from "react";

import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";

import { useTradeStore } from "../../store/tradeStore";
import type { Trade } from "../../types/trade";
import { getTradeColumns } from "./columns";

interface TradeTableProps {
  search?: string;

  onView?: (trade: Trade) => void;
  onEdit?: (trade: Trade) => void;
  onDelete?: (trade: Trade) => void;
}

export default function TradeTable({
  search = "",
  onView,
  onEdit,
  onDelete,
}: TradeTableProps) {
  const {
    trades,
    loading,
    fetchTrades,
  } = useTradeStore();

  useEffect(() => {
    void fetchTrades();
  }, [fetchTrades]);

  const columns = useMemo(
    () =>
      getTradeColumns({
        onView,
        onEdit,
        onDelete,
      }),
    [onView, onEdit, onDelete]
  );

  const filteredTrades = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {

      return trades;


    }

   
    return trades.filter((trade) => {
      return (
        trade.pair.toLowerCase().includes(query) ||
        trade.strategy.toLowerCase().includes(query) ||
        trade.orderType.toLowerCase().includes(query) ||
        (trade.outcome ?? trade.status).toLowerCase().includes(query)
      );
    });
  }, [search, trades]);

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        height: 650,
      }}
    >
      <DataGrid
        rows={filteredTrades}
        columns={columns}
        loading={loading}
        getRowId={(row) => row._id}
        disableRowSelectionOnClick
        pageSizeOptions={[10, 25, 50, 100]}
        initialState={{
          pagination: {
            paginationModel: {
              page: 0,
              pageSize: 10,
            },
          },
        }}
      />
    </Paper>
  );
}


// console.log(filteredTrades[0]);
