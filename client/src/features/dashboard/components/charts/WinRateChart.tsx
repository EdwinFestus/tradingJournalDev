import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";

interface WinRateChartProps {
  winRate: number;
}

export default function WinRateChart({
  winRate,
}: WinRateChartProps) {
  const data = [
    {
      name: "Win Rate",
      value: Number(winRate.toFixed(1)),
      fill: "#3B82F6",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h3 className="mb-6 text-lg font-semibold">
        Win Rate
      </h3>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="70%"
            outerRadius="100%"
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              tick={false}
            />

            <RadialBar
              dataKey="value"
              background
              cornerRadius={10}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-4xl font-bold">
          {winRate.toFixed(1)}%
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Overall Winning Percentage
        </p>
      </div>
    </div>
  );
}