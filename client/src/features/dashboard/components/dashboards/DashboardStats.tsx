type Props = {
    analytics: DashboardAnalytics;
};

export default function DashboardStats({
    analytics,
}: Props) {

    const overview = analytics.overview;

    return (

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
                title="Portfolio"
                value={`$${overview.netProfit.toFixed(2)}`}
                icon={<Paid />}
            />

            <StatCard
                title="Win Rate"
                value={`${overview.winRate.toFixed(1)}%`}
                icon={<Percent />}
            />

            <StatCard
                title="Profit Factor"
                value={overview.profitFactor.toFixed(2)}
                icon={<TrendingUp />}
            />

            <StatCard
                title="Trades"
                value={overview.totalTrades}
                icon={<Assessment />}
            />

        </div>

    );

}