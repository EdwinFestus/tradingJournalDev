import { useMemo } from "react";
import { useTradeStore } from "../../../shared/store/tradeStore";

export default function useDashboard() {
  const { trades, loading } = useTradeStore();

  const dashboard = useMemo(() => {
    const totalTrades = trades.length;

    const wins = trades.filter(
      (trade) => trade.outcome === "WIN"
    ).length;

    const losses = trades.filter(
      (trade) => trade.outcome === "LOSS"
    ).length;

    const breakeven = trades.filter(
      (trade) => trade.outcome === "BE"
    ).length;

    const totalProfit = trades
      .filter((trade) => trade.profitLoss > 0)
      .reduce((sum, trade) => sum + trade.profitLoss, 0);

    const totalLoss = Math.abs(
      trades
        .filter((trade) => trade.profitLoss < 0)
        .reduce((sum, trade) => sum + trade.profitLoss, 0)
    );

    const winRate =
      totalTrades === 0
        ? 0
        : Number(((wins / totalTrades) * 100).toFixed(1));

    const profitFactor =
      totalLoss === 0
        ? totalProfit
        : Number((totalProfit / totalLoss).toFixed(2));

    const portfolio = trades.reduce(
      (sum, trade) => sum + trade.profitLoss,
      0
    );

    const recentTrades = [...trades]
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      )
      .slice(0, 5);

    return {
      totalTrades,
      wins,
      losses,
      breakeven,
      winRate,
      profitFactor,
      portfolio,
      recentTrades,
    };
  }, [trades]);

  return {
    loading,
    trades,
    dashboard,
  };
}