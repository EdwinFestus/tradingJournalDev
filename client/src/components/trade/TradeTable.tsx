import { DataGrid } from "@mui/x-data-grid";
import { tradeColumns } from "./columns";
import { useTradeStore } from "../../store/tradeStore";

export default function TradeTable() {

  const { trades, loading } = useTradeStore();

  if (!loading && trades.length === 0) {
  return (
        <div className="rounded-xl bg-white p-10 text-center border">
          <h2 className="text-xl font-semibold">
            No Trades Yet
          </h2>

          <p className="text-slate-500 mt-2">
            Create your first trade to begin tracking your performance.
          </p>
        </div>
      );
    }

  return (
    <div
      className="
      bg-white
      rounded-2xl
      border
      border-slate-200
      shadow-sm
      p-4
      "
    >

      <div style={{ height: 650 }}>

        <DataGrid
          rows={trades}
          columns={tradeColumns}
          getRowId={(row) => row._id}
          loading={loading}
          pageSizeOptions={[10, 25, 50]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          disableRowSelectionOnClick
        />

      </div>

    </div>
  );
}