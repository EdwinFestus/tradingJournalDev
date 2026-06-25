import {
  TrendingUp,
  TrendingDown,
} from "@mui/icons-material";

export default function PerformanceOverview() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

      <h2 className="text-lg font-semibold mb-6">
        Performance Summary
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">

          <div>

            <p className="text-slate-500">
              Weekly Performance
            </p>

            <h3 className="text-2xl font-bold">
              +12.8%
            </h3>

          </div>

          <TrendingUp className="text-green-500 text-4xl" />

        </div>

        <div className="flex justify-between">

          <div>

            <p className="text-slate-500">
              Monthly Performance
            </p>

            <h3 className="text-2xl font-bold">
              +28.5%
            </h3>

          </div>

          <TrendingUp className="text-green-500 text-4xl" />

        </div>

        <div className="flex justify-between">

          <div>

            <p className="text-slate-500">
              Losing Streak
            </p>

            <h3 className="text-2xl font-bold">
              2 Trades
            </h3>

          </div>

          <TrendingDown className="text-red-500 text-4xl" />

        </div>

      </div>

    </div>
  );
}