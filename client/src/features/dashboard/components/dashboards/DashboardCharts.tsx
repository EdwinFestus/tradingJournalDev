type Props = {
    charts: DashboardCharts;
    analytics: DashboardAnalytics;
    drawdown: number;
};

export default function DashboardCharts({
    charts,
    analytics,
    drawdown,
}: Props) {

    return (

        <>

            <div className="grid gap-4 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.75fr)]">

                <EquityChart
                    data={charts.equityCurve}
                />

                <RiskOverview
                    drawdown={drawdown}
                    analytics={analytics}
                />

            </div>

            <div className="grid gap-4 xl:grid-cols-2">

                <MonthlyPnLChart
                    data={charts.monthlyPnL}
                />

                <WinRateChart
                    winRate={analytics.overview.winRate}
                />

            </div>

        </>

    );

}