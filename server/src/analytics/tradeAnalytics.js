export function getTradeAnalytics(trades) {
  // Implementation for trade analytics

  const closedTrades = trades.filter(
    trade => trade.status === "CLOSED"
  );

  return {
    totalTrades: closedTrades.length,
    winRate: closedTrades.length > 0 ? (closedTrades.filter(t => t.outcome === "WIN").length / closedTrades.length) * 100 : 0,
    averageProfitLoss: closedTrades.length > 0 ? closedTrades.reduce((sum, trade) => sum + (trade.profitLoss ?? 0), 0) / closedTrades.length : 0
  };

}