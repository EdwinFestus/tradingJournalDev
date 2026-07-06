import RecentTradeTable from "../tables/RecentTradeTable";

import type {
    Trade,
} from "../../types/dashboard.types";

interface Props {

    trades: Trade[];

}

export default function DashboardTrades({

    trades,

}: Props) {

    return (

        <RecentTradeTable

            trades={trades}

        />

    );

}