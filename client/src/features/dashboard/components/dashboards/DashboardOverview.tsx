import type { DashboardOverview } from "../../types/dashboard.types"

interface DashboardOverviewProps {
    overview: DashboardOverview;
}

const DashboardOverview = ( Props: DashboardOverviewProps ) => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-lg border border-slate-100 bg-slate-50/70 p-4 dark:border-slate-700 dark:bg-slate-800">
                <p className="text-xs font-semibold uppercase text-slate-500">
                    Total Trades
                </p>

                <p className="mt-2 text-lg font-bold">
                    {Props.overview.totalTrades}
                </p>
            </div>
            <div className="rounded-lg border border-slate-100 bg-slate-50/70 p-4 dark:border-slate-700 dark:bg-slate-800">
                <p className="text-xs font-semibold uppercase text-slate-500">
                    Closed Trades
                </p>
                <p className="mt-2 text-lg font-bold">
                    {Props.overview.closedTrades}
                </p>
            </div>
        </div> 

    )       
};

export default DashboardOverview;