import type { PortfolioSummary } from "../../types/dashboard.types";

interface DashboardHeaderProps {
  portfolio?: PortfolioSummary;
}

export default function DashboardHeader({
  portfolio,
}: DashboardHeaderProps) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-500">
          Welcome back. Here's your trading performance.
        </p>
      </div>

      {portfolio && (
        <div className="rounded-xl border border-slate-200 px-4 py-3 dark:border-slate-700">
          <p className="text-sm text-slate-500">
            Total Trades
          </p>

          <p className="text-2xl font-bold">
            {portfolio.totalTrades}
          </p>
        </div>
      )}
    </div>
  );
}