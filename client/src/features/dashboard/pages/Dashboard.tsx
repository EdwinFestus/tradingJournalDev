import {
  Assessment,
  Paid,
  Percent,
  TrendingUp,
} from "@mui/icons-material";

import ActivityTimeline from "../components/activity/ActivityTimeline";
import DashboardHeader from "../components/headers/DashboardHeader";
import EquityChart from "../components/charts/EquityChart";
import MonthlyPnLChart from "../components/charts/MonthlyPnLChart";
import PerformanceOverview from "../components/PerformanceOverview";
import QuickActions from "../components/QuickActions";
import RecentTrades from "../components/RecentTrades";
import RiskOverview from "../components/RiskOverview";
import StatCard from "../components/cards/StatCard";
import WinRateChart from "../components/charts/WinRateChart";

import useDashboard from "../hooks/useDashboard";

export default function Dashboard() {
  const {
    portfolio,
    analytics,
    charts,
    recentTrades,
    insights,
    streak,
    drawdown,
    loading,
    error,
  } = useDashboard();

  if (loading) {
    return (
      <div className="p-8">
        Loading dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-red-500">
        {error}
      </div>
    );
  }

  if (!analytics || !charts) {
    return null;
  }

  return (
    <div className="space-y-8">

      <DashboardHeader
        portfolio={portfolio}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Portfolio"
          value={`$${analytics.netProfit.toFixed(2)}`}
          icon={<Paid />}
          change="+8.6%"
        />

        <StatCard
          title="Win Rate"
          value={`${analytics.winRate.toFixed(1)}%`}
          icon={<Percent />}
          change="+4%"
        />

        <StatCard
          title="Profit Factor"
          value={analytics.profitFactor.toFixed(2)}
          icon={<TrendingUp />}
          change="+0.25"
        />

        <StatCard
          title="Trades"
          value={analytics.totalTrades}
          icon={<Assessment />}
          change="+14"
        />

      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.75fr)]">

        <EquityChart
          data={charts.equityCurve}
        />

        <RiskOverview
          drawdown={drawdown}
          analytics={analytics}
        />

      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">

        <MonthlyPnLChart
          data={charts.monthlyPnL}
        />

        <WinRateChart
          winRate={analytics.winRate}
        />

      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <RecentTrades
            trades={recentTrades}
          />

        </div>

        <QuickActions />

      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

        <PerformanceOverview
          analytics={analytics}
          streak={streak}
          insights={insights}
        />

        <ActivityTimeline
          trades={recentTrades}
        />

      </div>

    </div>
  );
}