import {
  CheckCircle,
  Shield,
  TrendingUp,
  Warning,
} from "@mui/icons-material";

import type { Analytics } from "../types/dashboard.types";

interface RiskOverviewProps {
  analytics: Analytics;
  drawdown: number;
}

export default function RiskOverview({
  analytics,
  drawdown,
}: RiskOverviewProps) {
  const items = [
    {
      label: "Average Risk",
      value: `$${(
        analytics.grossLoss /
        Math.max(analytics.losses, 1)
      ).toFixed(2)}`,
      icon: <Shield />,
      tone: "text-blue-600 bg-blue-50",
    },
    {
      label: "Average R:R",
      value: `1 : ${analytics.averageRR.toFixed(2)}`,
      icon: <TrendingUp />,
      tone: "text-emerald-600 bg-emerald-50",
    },
    {
      label: "Max Drawdown",
      value: `$${drawdown.toFixed(2)}`,
      icon: <Warning />,
      tone: "text-amber-600 bg-amber-50",
    },
    {
      label: "Profit Factor",
      value: analytics.profitFactor.toFixed(2),
      icon: <CheckCircle />,
      tone: "text-slate-700 bg-slate-100",
    },
  ];

  return (
    <section className="surface-card p-5">
      <div className="mb-5">
        <p className="panel-heading">
          Risk Overview
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Exposure and execution quality.
        </p>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between gap-4 rounded-lg border border-slate-100 bg-slate-50/70 px-3 py-3 dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${item.tone} [&_.MuiSvgIcon-root]:text-[18px]`}
              >
                {item.icon}
              </span>

              <span className="truncate text-sm font-medium">
                {item.label}
              </span>
            </div>

            <strong className="text-right text-sm font-semibold">
              {item.value}
            </strong>
          </div>
        ))}
      </div>
    </section>
  );
}