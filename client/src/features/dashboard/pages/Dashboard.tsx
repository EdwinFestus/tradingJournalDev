import Page from "@/shared/ui/Page";

import DashboardHeader from "../../../shared/headers/DashboardHeader";

import OverviewSection from "../components/OverviewSection";
import PerformanceSection from "../components/PerformanceSection";
import AnalyticsOverviewSection from "../components/AnalyticsOverviewSection";
import StrategySection from "../components/StrategySection";
import PsychologySection from "../components/PsychologySection";
// import SessionSection from "../components/SessionSection";
// import TradesSection from "../components/TradesSection";
// import InsightsSection from "../components/InsightsSection";

import { useDashboard } from "../hooks/useDashboard";

export default function Dashboard() {
  const {
    analytics,
    charts,
    // trades,
    // insights,
    // streak,
    portfolio,
    refresh,
    loading,
    error,
  } = useDashboard();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !analytics || !charts) {
    return <div>{error ?? "Unable to load dashboard."}</div>;
  }

  return (
    <Page>
      <DashboardHeader
          portfolio={portfolio!}
          onRefresh={refresh}
      />

     <OverviewSection
        overview={analytics.overview}
    />

      <PerformanceSection
        charts={charts}
        loading={loading}
      />

    <AnalyticsOverviewSection
      analytics={analytics}
    />



    <StrategySection
      analytics={analytics}
    />

    <PsychologySection
      analytics={analytics}
    />

{/* 



      <SessionSection
        analytics={analytics}
      />

      <TradesSection
        trades={trades ?? []}
      />

      <InsightsSection
        insights={insights ?? []}
        streak={streak}
      /> */}
    </Page>
  );
}