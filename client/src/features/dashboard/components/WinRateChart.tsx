import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import useDashboard from "../hooks/useDashboard";

export default function WinRateChart() {
  const { trades } = useDashboard();

  const monthlyWinRate = Object.values(
    trades.reduce((acc, trade) => {
      const month = new Date(trade.createdAt).toLocaleString("default", {
        month: "short",
      });

      if (!acc[month]) {
        acc[month] = {
          month,
          wins: 0,
          total: 0,
        };
      }

      acc[month].total++;

      if (trade.outcome === "WIN") {
        acc[month].wins++;
      }

      return acc;
    }, {} as Record<
      string,
      {
        month: string;
        wins: number;
        total: number;
      }
    >)
  ).map((item) => ({
    month: item.month,
    rate:
      item.total === 0
        ? 0
        : Number(((item.wins / item.total) * 100).toFixed(1)),
  }));

  return (
    <section className="surface-card p-5">
      <div className="mb-5">
        <p className="panel-heading">
          Win-rate trend
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Execution consistency by month.
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={monthlyWinRate}
            margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
          >
            <CartesianGrid stroke="#e5e7eb" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
            <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} width={56} />
            <Tooltip
              contentStyle={{
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
              }}
            />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#059669"
              strokeWidth={2}
              dot={{ r: 3, fill: "#059669" }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
