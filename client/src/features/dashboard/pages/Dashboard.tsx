import {
  Assessment,
  Paid,
  Percent,
  TrendingUp,
} from "@mui/icons-material";

import ActivityTimeline from "../components/ActivityTimeline";
import DashboardHeader from "../components/DashboardHeader";
import EquityChart from "../components/EquityChart";
import MonthlyPnLChart from "../components/MonthlyPnLChart";
import PerformanceOverview from "../components/PerformanceOverview";
import QuickActions from "../components/QuickActions";
import RecentTrades from "../components/RecentTrades";
import RiskOverview from "../components/RiskOverview";
import StatCard from "../components/StatCard";
import WinRateChart from "../components/WinRateChart";
import useDashboard from "../hooks/useDashboard";

export default function Dashboard() {
  const { dashboard } = useDashboard();

  return (
    <div className="space-y-8">
      <DashboardHeader />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Portfolio"
          value={`$${dashboard.portfolio.toFixed(2)}`}
          icon={<Paid />}
          change="+8.6%"
        />

        <StatCard
          title="Win Rate"
          value={`${dashboard.winRate}%`}
          icon={<Percent />}
          change="+4%"
        />

        <StatCard
          title="Profit Factor"
          value={dashboard.profitFactor}
          icon={<TrendingUp />}
          change="+0.25"
        />

        <StatCard
          title="Trades"
          value={dashboard.totalTrades}
          icon={<Assessment />}
          change="+14"
        />
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.75fr)]">
        <div className="min-w-0">
          <EquityChart />
        </div>
        <RiskOverview />
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <MonthlyPnLChart />
        <WinRateChart />
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentTrades />
        </div>
        <QuickActions />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <PerformanceOverview />
        <ActivityTimeline />
      </div>
    </div>
  );
}
