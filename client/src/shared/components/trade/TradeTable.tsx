import { DataGrid } from "@mui/x-data-grid";

import { useTradeStore } from "../../store/tradeStore";
import { tradeColumns } from "./columns";

export default function TradeTable() {
  const { trades, loading } = useTradeStore();

  if (!loading && trades.length === 0) {
    return (
      <section className="surface-card p-10 text-center">
        <h2 className="text-xl font-semibold text-slate-950">
          No trades yet
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Create your first trade to begin tracking your performance.
        </p>
      </section>
    );
  }

  return (
    <section className="surface-card overflow-hidden">
      <div className="border-b border-slate-200 px-5 py-4">
        <p className="panel-heading">
          All trades
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Sort and inspect every recorded position.
        </p>
      </div>

      <div className="h-[650px]">
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
          sx={{
            border: 0,
            color: "#334155",
            fontFamily: "Inter, sans-serif",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f8fafc",
              borderBottom: "1px solid #e5e7eb",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              color: "#64748b",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid #f1f5f9",
              fontSize: 14,
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#f8fafc",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "1px solid #e5e7eb",
            },
          }}
        />
      </div>
    </section>
  );
}
