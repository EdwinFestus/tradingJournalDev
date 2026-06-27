import TradeDialog from "./TradeDialog";

import {
  Add,
  Download,
  FilterList,
  Search,
} from "@mui/icons-material";

export default function TradeToolbar() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 mb-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Trade Journal
          </h1>

          <p className="text-slate-500 mt-1">
            Manage, review and analyze every trade.
          </p>
        </div>

        <TradeDialog />
      </div>

      <div className="mt-6 flex flex-col gap-4 xl:flex-row xl:items-center">

        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search trades..."
            className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 focus:border-sky-500 focus:outline-none"
          />
        </div>

        <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 hover:bg-slate-100">
          <FilterList />
          Filters
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 hover:bg-slate-100">
          <Download />
          Export
        </button>

      </div>
    </div>
  );
}