import useDashboard from "../hooks/useDashboard";

export default function PerformanceOverview() {
  const { dashboard } = useDashboard();

  const metrics = [
    {
      label: "Win rate",
      value: `${dashboard.winRate}%`,
    },
    {
      label: "Total trades",
      value: dashboard.totalTrades,
    },
    {
      label: "Profit factor",
      value: dashboard.profitFactor,
    },
    {
      label: "Portfolio",
      value: `$${dashboard.portfolio.toFixed(2)}`,
    },
  ];

  return (
    <section className="surface-card p-5 lg:col-span-2">
      <div className="mb-5">
        <p className="panel-heading">
          Performance snapshot
        </p>
        <p className="mt-1 text-sm text-slate-500">
          High-level account health indicators.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-lg border border-slate-100 bg-slate-50/70 p-4"
          >
            <p className="text-xs font-semibold uppercase text-slate-500">
              {metric.label}
            </p>
            <p className="mt-2 text-lg font-bold text-slate-950">
              {metric.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
