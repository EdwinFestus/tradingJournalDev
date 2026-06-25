import {
  TrendingUp,
  Shield,
  Warning,
  CheckCircle,
} from "@mui/icons-material";

export default function RiskOverview() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">
        Risk Overview
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Shield className="text-sky-500" />
            <span>Risk Per Trade</span>
          </div>

          <strong>2%</strong>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-green-500" />
            <span>Average R:R</span>
          </div>

          <strong>1 : 3.8</strong>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Warning className="text-amber-500" />
            <span>Max Drawdown</span>
          </div>

          <strong>4.2%</strong>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-500" />
            <span>Best Strategy</span>
          </div>

          <strong>Liquidity Grab</strong>
        </div>

      </div>
    </div>
  );
}