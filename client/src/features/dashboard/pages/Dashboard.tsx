import DashboardHeader from "../components/headers/DashboardHeader";

import DashboardStats from "../components/dashboards/DashboardStats";
import DashboardCharts from "../components/dashboards/DashboardCharts";
import DashboardAnalytics from "../components/dashboards/DashboardAnalytics";
import DashboardStrategy from "../components/dashboards/DashboardStrategy";
import DashboardTrades from "../components/dashboards/DashboardTrades";
import DashboardBottom from "../components/dashboards/DashboardBottom";
import DashboardSessions from "../components/dashboards/DashboardSessions";
import DashboardPsychology from "../components/dashboards/DashboardPsychology";
import DashboardInstruments from "../components/dashboards/DashboardInstruments";

import DashboardLoading from "../components/dashboards/DashboardLoading";
import DashboardError from "../components/dashboards/DashboardError";
import DashboardEmpty from "../components/dashboards/DashboardEmpty";

import { useDashboard } from "../hooks/useDashboard";

export default function Dashboard() {
    const {
        dashboard,
        loading,
        error,
        refresh,
    } = useDashboard();

    if (loading) {
        return <DashboardLoading />;
    }

    if (error) {
        return (
            <DashboardError
                message={error}
                onRetry={refresh}
            />
        );
    }

    if (!dashboard) {
        return <DashboardEmpty />;
    }

    return (
        <>
            <DashboardHeader
                portfolio={dashboard.portfolio}
                onRefresh={refresh}
            />

            <DashboardStats
                overview={dashboard.analytics.overview}
            />

            <DashboardCharts
                charts={dashboard.charts}
            />

            <DashboardAnalytics
                analytics={dashboard.analytics}
            />

            <DashboardStrategy
                analytics={dashboard.analytics}
            />

            <DashboardSessions
                analytics={dashboard.analytics}
            />

            <DashboardPsychology
                analytics={dashboard.analytics}
            />

            <DashboardInstruments
                analytics={dashboard.analytics}
            />

            <DashboardTrades
                trades={dashboard.recentTrades}
            />

            <DashboardBottom
                insights={dashboard.insights}
                streak={dashboard.streak}
            />
        </>
    );
}