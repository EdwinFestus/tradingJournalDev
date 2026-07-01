import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { MonthlyPnL } from "../../types/dashboard.types";

interface MonthlyPnLChartProps {
  data: MonthlyPnL[];
}

export default function MonthlyPnLChart({
  data,
}: MonthlyPnLChartProps) {
  return (
    <section className="surface-card p-5">
      <div className="mb-5">
        <p className="panel-heading">
          Monthly P&amp;L
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Profit and loss grouped by month.
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 8,
              right: 8,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              stroke="#e5e7eb"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#64748b",
                fontSize: 12,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#64748b",
                fontSize: 12,
              }}
              width={56}
            />

            <Tooltip
              formatter={(value: number) => [
                `$${value.toFixed(2)}`,
                "Profit",
              ]}
              contentStyle={{
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                boxShadow:
                  "0 12px 30px rgba(15,23,42,0.08)",
              }}
            />

            <Bar
              dataKey="profit"
              fill="#2563eb"
              radius={[4, 4, 0, 0]}
              maxBarSize={44}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}