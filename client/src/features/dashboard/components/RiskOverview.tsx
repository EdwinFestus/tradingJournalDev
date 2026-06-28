import {
  CheckCircle,
  Shield,
  TrendingUp,
  Warning,
} from "@mui/icons-material";

import useDashboard from "../hooks/useDashboard";

export default function RiskOverview() {
  const { trades } = useDashboard();

  const averageRR =
    trades.length === 0
      ? 0
      : trades.reduce(
          (sum, trade) => sum + trade.rrRatio,
          0
        ) / trades.length;

  const averageRisk =
    trades.length === 0
      ? 0
      : trades.reduce(
          (sum, trade) => sum + trade.riskAmount,
          0
        ) / trades.length;

  const items = [
    {
      label: "Average risk",
      value: `$${averageRisk.toFixed(2)}`,
      icon: <Shield />,
      tone: "text-blue-600 bg-blue-50",
    },
    {
      label: "Average R:R",
      value: `1 : ${averageRR.toFixed(2)}`,
      icon: <TrendingUp />,
      tone: "text-emerald-600 bg-emerald-50",
    },
    {
      label: "Max drawdown",
      value: "4.2%",
      icon: <Warning />,
      tone: "text-amber-600 bg-amber-50",
    },
    {
      label: "Best strategy",
      value: "Liquidity Grab",
      icon: <CheckCircle />,
      tone: "text-slate-700 bg-slate-100",
    },
  ];

  return (
    <section className="surface-card p-5">
      <div className="mb-5">
        <p className="panel-heading">
          Risk overview
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Exposure and execution quality.
        </p>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between gap-4 rounded-lg border border-slate-100 bg-slate-50/70 px-3 py-3"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${item.tone} [&_.MuiSvgIcon-root]:text-[18px]`}>
                {item.icon}
              </span>
              <span className="truncate text-sm font-medium text-slate-600">
                {item.label}
              </span>
            </div>

            <strong className="text-right text-sm font-semibold text-slate-950">
              {item.value}
            </strong>
          </div>
        ))}
      </div>
    </section>
  );
}
