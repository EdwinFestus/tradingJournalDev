import TradeToolbar from "../../components/trade/TradeToolbar";
import TradeTable from "../../components/trade/TradeTable";

export default function TradeJournal() {
  return (
    <div className="space-y-6">
      <TradeToolbar />
      <TradeTable />
    </div>
  );
}