import type { Trade } from "../types/trade";

interface ActivityTimelineProps {
  trades: Trade[];
}

export default function ActivityTimeline({
  trades,
}: ActivityTimelineProps) {
  return (
    <section className="surface-card p-5">
      <div className="mb-5">
        <p className="panel-heading">
          Activity Timeline
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Latest trading activity.
        </p>
      </div>

      <div className="space-y-4">
        {trades.length > 0 ? (
          trades.map((trade) => (
            <div
              key={trade._id}
              className="relative pl-5 before:absolute before:left-0 before:top-1.5 before:h-2 before:w-2 before:rounded-full before:bg-blue-600"
            >
              <p className="text-sm font-medium">
                {trade.orderType} {trade.pair}
              </p>

              <p className="text-xs text-slate-500">
                {trade.outcome} • RR {trade.rrRatio.toFixed(2)}
              </p>

              <span className="text-xs text-slate-400">
                {new Date(
                  trade.tradeDate
                ).toLocaleDateString()}
              </span>
            </div>
          ))
        ) : (
          <p className="text-sm text-slate-500">
            No recent activity available.
          </p>
        )}
      </div>
    </section>
  );
}