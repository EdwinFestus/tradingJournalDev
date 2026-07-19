import { useEffect } from "react";

import TradeTable from "../components/TradeTable/TradeTable";
import TradeToolbar from "../components/TradeTable/TradeToolbar";
import { useTradeStore } from "../store/tradeStore";

export default function TradeJournal() {
  const fetchTrades = useTradeStore(
    (state) => state.fetchTrades
  );

  useEffect(() => {
    fetchTrades();
  }, [fetchTrades]);

  return (
    <div className="space-y-4">
      <TradeToolbar />
      <TradeTable />
    </div>
  );
}
