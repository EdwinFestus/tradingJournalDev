const activities = [
  "Trade closed on Volatility 75",
  "Journal updated",
  "Risk settings modified",
  "Weekly report generated",
];

export default function ActivityTimeline() {
  return (
    <section className="surface-card p-5">
      <div className="mb-5">
        <p className="panel-heading">
          Activity timeline
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Workspace changes and updates.
        </p>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity}
            className="relative pl-5 before:absolute before:left-0 before:top-1.5 before:h-2 before:w-2 before:rounded-full before:bg-slate-950"
          >
            <p className="text-sm font-medium text-slate-800">
              {activity}
            </p>

            <span className="text-xs text-slate-500">
              Just now
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
