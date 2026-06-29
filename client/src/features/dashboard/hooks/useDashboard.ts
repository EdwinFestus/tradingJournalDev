import { useMemo } from "react";
import { useTradeStore } from "../../../shared/store/tradeStore";
import {
  calculateAnalytics,
  monthlyPnL,
} from "../../../shared/services/analyticsService";

export default function useDashboard() {
  const { trades, loading } = useTradeStore();

  const analytics = useMemo(
    () => calculateAnalytics(trades),
    [trades]
  );

  const monthlyChart = useMemo(
    () => monthlyPnL(trades),
    [trades]
  );

  const recentTrades = useMemo(() => {
    return [...trades]
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      )
      .slice(0, 5);
  }, [trades]);

  return {
    loading,
    trades,
    analytics,
    monthlyChart,
    recentTrades,
  };
}