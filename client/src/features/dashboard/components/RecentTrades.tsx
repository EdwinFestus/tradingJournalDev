import useDashboard from "../hooks/useDashboard";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
});

export default function RecentTrades() {
  const { dashboard } = useDashboard();

  return (
    <section className="surface-card overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <div>
          <p className="panel-heading">
            Recent trades
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Latest journal entries and outcomes.
          </p>
        </div>

        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
          {dashboard.recentTrades.length} shown
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-500">
            <tr>
              <th className="px-5 py-3">Pair</th>
              <th className="px-5 py-3">Direction</th>
              <th className="px-5 py-3">P&L</th>
              <th className="px-5 py-3">R:R</th>
              <th className="px-5 py-3">Outcome</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {dashboard.recentTrades.map((trade) => (
              <tr key={trade._id} className="transition hover:bg-slate-50">
                <td className="px-5 py-4 font-semibold text-slate-950">
                  {trade.pair}
                </td>
                <td className="px-5 py-4 text-slate-600">
                  {trade.orderType}
                </td>
                <td
                  className={`px-5 py-4 font-semibold ${
                    trade.profitLoss >= 0
                      ? "text-emerald-600"
                      : "text-rose-600"
                  }`}
                >
                  {currencyFormatter.format(trade.profitLoss)}
                </td>
                <td className="px-5 py-4 text-slate-600">
                  {trade.rrRatio.toFixed(2)}
                </td>
                <td className="px-5 py-4">
                  <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                    {trade.outcome}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
