import type {
  Analytics,
  Insight,
  Streak,
} from "../types/dashboard.types";

interface PerformanceOverviewProps {
  analytics: Analytics;
  streak?: Streak;
  insights?: Insight[];
}

export default function PerformanceOverview({
  analytics,
  streak,
  insights = [],
}: PerformanceOverviewProps) {
  const metrics = [
    {
      label: "Win Rate",
      value: `${analytics.winRate.toFixed(1)}%`,
    },
    {
      label: "Total Trades",
      value: analytics.totalTrades,
    },
    {
      label: "Profit Factor",
      value: analytics.profitFactor.toFixed(2),
    },
    {
      label: "Portfolio",
      value: `$${analytics.netProfit.toFixed(2)}`,
    },
  ];

  return (
    <section className="surface-card p-5 lg:col-span-2">
      <div className="mb-5">
        <p className="panel-heading">
          Performance Snapshot
        </p>

        <p className="mt-1 text-sm text-slate-500">
          High-level account health indicators.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-lg border border-slate-100 bg-slate-50/70 p-4 dark:border-slate-700 dark:bg-slate-800"
          >
            <p className="text-xs font-semibold uppercase text-slate-500">
              {metric.label}
            </p>

            <p className="mt-2 text-lg font-bold">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
          <p className="text-sm font-semibold">
            Current Streak
          </p>

          <p className="mt-2 text-xl font-bold">
            {streak
              ? `${streak.type} (${streak.count})`
              : "No streak"}
          </p>
        </div>

        <div className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
          <p className="text-sm font-semibold">
            Latest Insight
          </p>

          {insights.length > 0 ? (
            <>
              <p className="mt-2 font-semibold">
                {insights[0].title}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {insights[0].description}
              </p>
            </>
          ) : (
            <p className="mt-2 text-sm text-slate-500">
              No insights available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}