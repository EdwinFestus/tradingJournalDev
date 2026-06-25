import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatCard from "../../components/dashboard/StatCard";
import EquityChart from "../../components/dashboard/EquityChart";
import MonthlyPnLChart from "../../components/dashboard/MonthlyPnLChart";
import WinRateChart from "../../components/dashboard/WinRateChart";
import RecentTrades from "../../components/dashboard/RecentTrades";
import RiskOverview from "../../components/dashboard/RiskOverview";
import QuickActions from "../../components/dashboard/QuickActions";
import PerformanceOverview from "../../components/dashboard/PerformanceOverview";
import ActivityTimeline from "../../components/dashboard/ActivityTimeline";

import {
  TrendingUp,
  Paid,
  Percent,
  Assessment,
} from "@mui/icons-material";

export default function Dashboard() {

  return (

    <div className="space-y-8">

      <DashboardHeader />

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Portfolio"
          value="$12,580"
          icon={<Paid />}
          change="+8.6%"
        />

        <StatCard
          title="Win Rate"
          value="67%"
          icon={<Percent />}
          change="+4%"
        />

        <StatCard
          title="Profit Factor"
          value="2.41"
          icon={<TrendingUp />}
          change="+0.25"
        />

        <StatCard
          title="Trades"
          value="128"
          icon={<Assessment />}
          change="+14"
        />

      </div>

      <div className="mt-8">
        <EquityChart />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
        <MonthlyPnLChart />
        <WinRateChart />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

      <div className="xl:col-span-2">
        <RecentTrades />
        </div>
        <RiskOverview />
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <QuickActions />
          <PerformanceOverview />
          <ActivityTimeline />
        </div>

    </div>

  );

}