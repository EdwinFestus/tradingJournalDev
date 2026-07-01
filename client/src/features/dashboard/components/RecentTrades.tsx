import type { Trade } from "../../../shared/types/trade";

interface RecentTradesProps {
  trades: Trade[];
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function RecentTrades({
  trades,
}: RecentTradesProps) {
  return (
    <section className="surface-card overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <div>
          <p className="panel-heading">
            Recent Trades
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Latest journal entries and outcomes.
          </p>
        </div>

        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
          {trades.length} shown
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-500">
            <tr>
              <th className="px-5 py-3">Pair</th>
              <th className="px-5 py-3">Direction</th>
              <th className="px-5 py-3">P&amp;L</th>
              <th className="px-5 py-3">R:R</th>
              <th className="px-5 py-3">Outcome</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {trades.map((trade) => (
              <tr
                key={trade._id}
                className="transition hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <td className="px-5 py-4 font-semibold">
                  {trade.pair}
                </td>

                <td className="px-5 py-4">
                  {trade.orderType}
                </td>

                <td
                  className={`px-5 py-4 font-semibold ${
                    trade.profitLoss >= 0
                      ? "text-emerald-600"
                      : "text-rose-600"
                  }`}
                >
                  {currencyFormatter.format(
                    trade.profitLoss
                  )}
                </td>

                <td className="px-5 py-4">
                  {trade.rrRatio.toFixed(2)}
                </td>

                <td className="px-5 py-4">
                  <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold dark:bg-slate-700">
                    {trade.outcome}
                  </span>
                </td>
              </tr>
            ))}

            {trades.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="py-10 text-center text-slate-500"
                >
                  No recent trades found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}