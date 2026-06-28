import { useEffect } from "react";

import TradeTable from "../../../shared/components/trade/TradeTable";
import TradeToolbar from "../../../shared/components/trade/TradeToolbar";
import { useTradeStore } from "../../../shared/store/tradeStore";

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
