
import DashboardAnalytics from "../components/dashboards/DashboardAnalytics";
import DashboardCharts from "../components/dashboards/DashboardCharts";
import DashboardError from "../components/dashboards/DashboardError";
import DashboardEmpty from "../components/dashboards/DashboardEmpty";
import DashboardHeader from "../components/dashboards/DashboardHeader";
import DashboardInsights from "../components/dashboards/DashboardInsights";
import DashboardLoading from "../components/dashboards/DashboardLoading";
import DashboardStats from "../components/dashboards/DashboardStats";
import DashboardTrades from "../components/dashboards/DashboardTrades";

import useDashboard from "../hooks/useDashboard";



export default function Dashboard() {

    const dashboard = useDashboard();

    if (dashboard.loading)
        return <DashboardLoading />;

    if (dashboard.error)
        return <DashboardError />;

    if (!dashboard.analytics)
        return <DashboardEmpty />;

    return (

        <div className="space-y-8">

            <DashboardHeader
                portfolio={dashboard.portfolio}
            />

            <DashboardStats
                overview={dashboard.analytics.overview}
            />

            <DashboardAnalytics
                charts={dashboard.charts}
                analytics={dashboard.analytics}
                drawdown={dashboard.drawdown}
            />

            <DashboardTrades
                trades={dashboard.recentTrades}
            />

            <DashboardInsights
                analytics={dashboard.analytics}
                insights={dashboard.insights}
                streak={dashboard.streak}
                trades={dashboard.recentTrades}
            />

        </div>

    );

}