import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  change: string;
  positive?: boolean;
}

export default function StatCard({
  title,
  value,
  icon,
  change,
  positive = true,
}: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all">

      <div className="flex justify-between">

        <div>

          <p className="text-slate-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

          <p
            className={`mt-3 text-sm ${
              positive
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {change}
          </p>

        </div>

        <div className="text-sky-500 text-3xl">
          {icon}
        </div>

      </div>

    </div>
  );
}