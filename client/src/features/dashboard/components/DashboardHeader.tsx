export default function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 border-b border-slate-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="eyebrow">
          Command center
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-normal text-slate-950">
          Trading performance
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Review portfolio movement, execution quality, and risk posture from one focused workspace.
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Synced just now
      </div>
    </div>
  );
}
