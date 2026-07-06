import RecentTradeTable from "../tables/RecentTradeTable";

import type { Trade } from "../../types/dashboard.types";

interface DashboardTradesProps {
    trades: Trade[];
}

export default function DashboardTrades({
    trades,
}: DashboardTradesProps) {
    return <RecentTradeTable trades={trades} />;
}