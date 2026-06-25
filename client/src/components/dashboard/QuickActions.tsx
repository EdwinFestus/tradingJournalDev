import {
  Add,
  UploadFile,
  Download,
} from "@mui/icons-material";

export default function QuickActions() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-5">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 gap-4">

        <button className="flex items-center gap-3 rounded-xl bg-sky-500 hover:bg-sky-600 transition text-white px-4 py-3">
          <Add />
          New Trade
        </button>

        <button className="flex items-center gap-3 rounded-xl border border-slate-300 hover:bg-slate-100 transition px-4 py-3">
          <UploadFile />
          Import Trades
        </button>

        <button className="flex items-center gap-3 rounded-xl border border-slate-300 hover:bg-slate-100 transition px-4 py-3">
          <Download />
          Export Report
        </button>

      </div>
    </div>
  );
}