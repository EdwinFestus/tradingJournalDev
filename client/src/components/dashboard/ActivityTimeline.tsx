export default function ActivityTimeline() {
  const activities = [
    "Trade closed on Volatility 75",
    "Journal updated",
    "Risk settings modified",
    "Weekly report generated",
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

      <h2 className="text-lg font-semibold mb-6">
        Activity Timeline
      </h2>

      <div className="space-y-4">

        {activities.map((activity, index) => (
          <div
            key={index}
            className="border-l-4 border-sky-500 pl-4"
          >
            <p>{activity}</p>

            <span className="text-sm text-slate-400">
              Just now
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}