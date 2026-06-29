import type { Trade } from "../types/trade";

export interface DashboardAnalytics {
  totalTrades: number;
  openTrades: number;
  closedTrades: number;
  wins: number;
  losses: number;
  winRate: number;
  totalProfit: number;
  totalLoss: number;
  netProfit: number;
  averageRR: number;
  profitFactor: number;
  bestStrategy: string;
}

export function calculateAnalytics(
  trades: Trade[]
): DashboardAnalytics {

  const totalTrades = trades.length;

  const openTrades =
    trades.filter(t => t.outcome === "OPEN").length;

  const closedTrades =
    trades.filter(t => t.outcome !== "OPEN").length;

  const winningTrades =
    trades.filter(t => t.outcome === "WIN");

  const losingTrades =
    trades.filter(t => t.outcome === "LOSS");

  const wins = winningTrades.length;

  const losses = losingTrades.length;

  const totalProfit =
    winningTrades.reduce(
      (sum, trade) => sum + trade.profitLoss,
      0
    );

  const totalLoss =
    Math.abs(
      losingTrades.reduce(
        (sum, trade) => sum + trade.profitLoss,
        0
      )
    );

  const netProfit =
    totalProfit - totalLoss;

  const winRate =
    closedTrades === 0
      ? 0
      : (wins / closedTrades) * 100;

  const averageRR =
    totalTrades === 0
      ? 0
      : trades.reduce(
          (sum, trade) => sum + trade.rrRatio,
          0
        ) / totalTrades;

  const profitFactor =
    totalLoss === 0
      ? totalProfit
      : totalProfit / totalLoss;

  const strategyStats: Record<string, number> = {};

  winningTrades.forEach(trade => {

    strategyStats[trade.strategy] =
      (strategyStats[trade.strategy] || 0) + 1;

  });

  const bestStrategy =
    Object.keys(strategyStats).sort(
      (a, b) =>
        strategyStats[b] - strategyStats[a]
    )[0] || "N/A";

  return {
    totalTrades,
    openTrades,
    closedTrades,
    wins,
    losses,
    winRate,
    totalProfit,
    totalLoss,
    netProfit,
    averageRR,
    profitFactor,
    bestStrategy,
  };
}

export function monthlyPnL(trades: Trade[]) {

  const months: Record<string, number> = {};

  trades.forEach(trade => {

    const month = new Date(
      trade.tradeDate
    ).toLocaleString("default", {
      month: "short"
    });

    months[month] =
      (months[month] || 0) +
      trade.profitLoss;

  });

  return Object.entries(months).map(
    ([month, pnl]) => ({
      month,
      pnl,
    })
  );
}