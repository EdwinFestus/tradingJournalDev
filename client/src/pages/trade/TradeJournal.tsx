import { useEffect } from "react";

import TradeToolbar from "../../components/trade/TradeToolbar";
import TradeTable from "../../components/trade/TradeTable";

import { useTradeStore } from "../../store/tradeStore";

export default function TradeJournal() {
  const fetchTrades = useTradeStore(
    (state) => state.fetchTrades
  );

  useEffect(() => {
    fetchTrades();
  }, [fetchTrades]);

  return (
    <div className="space-y-6">
      <TradeToolbar />
      <TradeTable />
    </div>
  );
}