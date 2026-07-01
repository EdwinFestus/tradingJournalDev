import type { ReactNode } from "react";

interface StatCardProps {
    title: string;
    value: string | number;
    change: string;
    icon: React.ReactNode;

    subtitle?: string;

    loading?: boolean;

    trend?: "up" | "down";

    accent?: "blue" | "green" | "purple" | "orange";
}

export default function StatCard({
  title,
  value,
  icon,
  change,
  positive = true,
}: StatCardProps) {
  return (
    <div className="surface-card p-5 transition hover:border-slate-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="metric-value mt-2 truncate">
            {value}
          </h2>

          <p
            className={`mt-3 inline-flex rounded-md px-2 py-1 text-xs font-semibold ${
              positive
                ? "bg-emerald-50 text-emerald-700"
                : "bg-rose-50 text-rose-700"
            }`}
          >
            {change}
          </p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 [&_.MuiSvgIcon-root]:text-[21px]">
          {icon}
        </div>
      </div>
    </div>
  );
}
