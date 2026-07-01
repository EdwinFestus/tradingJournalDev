import {
  Download,
  FilterList,
  Search,
} from "@mui/icons-material";

import TradeDialog from "../../../features/trade/components/TradeDialog";

export default function TradeToolbar() {
  return (
    <section className="surface-card p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">
            Journal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-950">
            Trade journal
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Manage, review, and analyze every execution in one structured view.
          </p>
        </div>

        <TradeDialog />
      </div>

      <div className="mt-6 flex flex-col gap-3 xl:flex-row xl:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" sx={{ fontSize: 20 }} />

          <input
            type="text"
            placeholder="Search trades..."
            className="h-11 w-full rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
          />
        </div>

        <button className="flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
          <FilterList sx={{ fontSize: 20 }} />
          Filters
        </button>

        <button className="flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
          <Download sx={{ fontSize: 20 }} />
          Export
        </button>
      </div>
    </section>
  );
}
