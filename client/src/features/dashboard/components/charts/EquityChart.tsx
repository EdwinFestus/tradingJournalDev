import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { EquityPoint } from "../../types/dashboard.types";

interface EquityChartProps {
  data: EquityPoint[];
}

export default function EquityChart({
  data,
}: EquityChartProps) {
  return (
    <section className="surface-card p-5">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="panel-heading">
            Equity Curve
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Cumulative realized profit over time.
          </p>
        </div>

        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
          Live
        </span>
      </div>

      <div className="h-80">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart
            data={data}
            margin={{
              top: 8,
              right: 8,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="equityFill"
                x1="0"
                x2="0"
                y1="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#2563eb"
                  stopOpacity={0.24}
                />

                <stop
                  offset="95%"
                  stopColor="#2563eb"
                  stopOpacity={0.02}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#e5e7eb"
              vertical={false}
            />

            <XAxis
              dataKey="date"
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
                "Equity",
              ]}
              contentStyle={{
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                boxShadow:
                  "0 12px 30px rgba(15,23,42,.08)",
              }}
            />

            <Area
              type="monotone"
              dataKey="equity"
              stroke="#2563eb"
              strokeWidth={2}
              fill="url(#equityFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}