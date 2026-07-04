

export const DashboardInsights = () => {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
        <div className="space-y-4">
            <div className="surface-card p-5">
                <p className="panel-heading">
                    Insights
                </p>
                <p className="mt-1 text-sm text-slate-500">
                    Key takeaways from your trading performance.
                </p>
            </div>
            <div className="surface-card p-5">
                <p className="panel-heading">
                    Streaks
                </p>
                <p className="mt-1 text-sm text-slate-500">
                    Your longest winning and losing streaks.
                </p>
            </div>
        </div>
        <div className="space-y-4">
            <div className="surface-card p-5">
                <p className="panel-heading">
                    Trade Insights
                </p>
                <p className="mt-1 text-sm text-slate-500">
                    Analysis of your trading behavior and patterns.
                </p>
            </div>
        </div>
    </div>
  );
};
