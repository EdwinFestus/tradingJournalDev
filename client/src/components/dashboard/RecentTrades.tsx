import { recentTrades } from "../../data/dashboardData";

export default function RecentTrades() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold">Recent Trades</h2>

        <button className="text-sky-600 text-sm hover:underline">
          View All
        </button>
      </div>

      <table className="w-full">
        <thead className="border-b">
          <tr className="text-left text-slate-500 text-sm">
            <th className="pb-3">Pair</th>
            <th className="pb-3">Type</th>
            <th className="pb-3">Result</th>
            <th className="pb-3">R:R</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {recentTrades.map((trade) => (
            <tr
              key={trade.id}
              className="border-b last:border-0"
            >
              <td className="py-3">{trade.pair}</td>

              <td
                className={
                  trade.type === "BUY"
                    ? "text-green-600 font-semibold"
                    : "text-red-600 font-semibold"
                }
              >
                {trade.type}
              </td>

              <td>{trade.result}</td>

              <td>{trade.rr}</td>

              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    trade.status === "Win"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {trade.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}