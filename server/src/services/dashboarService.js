import Trade from "../models/Trade.js";

/**
 * ------------------------------------------
 * Dashboard Service
 * ------------------------------------------
 * Central analytics engine for Project Ella
 * Every dashboard endpoint should consume this service.
 */

/* ------------------------------------------ */
/* Helpers */
/* ------------------------------------------ */

const percentage = (value, total) => {
  if (!total) return 0;
  return Number(((value / total) * 100).toFixed(2));
};

const average = (values = []) => {
  if (!values.length) return 0;

  return Number(
    (
      values.reduce((sum, value) => sum + value, 0) /
      values.length
    ).toFixed(2)
  );
};

const sum = (values = []) =>
  values.reduce((acc, value) => acc + value, 0);

/* ------------------------------------------ */
/* Fetch Trades */
/* ------------------------------------------ */

export const getTrades = async (userId) => {
  return await Trade.find({
    user: userId,
  }).sort({
    tradeDate: 1,
  });
};

/* ------------------------------------------ */
/* Portfolio */
/* ------------------------------------------ */

export const getPortfolioSummary = (trades) => {
  const wins = trades.filter(
    (trade) => trade.outcome === "WIN"
  );

  const losses = trades.filter(
    (trade) => trade.outcome === "LOSS"
  );

  const open = trades.filter(
    (trade) => trade.outcome === "OPEN"
  );

  const breakeven = trades.filter(
    (trade) => trade.outcome === "BE"
  );

  return {
    totalTrades: trades.length,

    winningTrades: wins.length,

    losingTrades: losses.length,

    openTrades: open.length,

    breakevenTrades: breakeven.length,
  };
};

/* ------------------------------------------ */
/* Analytics */
/* ------------------------------------------ */

export const getAnalytics = (trades) => {
  const wins = trades.filter(
    (trade) => trade.outcome === "WIN"
  );

  const losses = trades.filter(
    (trade) => trade.outcome === "LOSS"
  );

  const grossProfit = sum(
    wins.map((trade) => trade.profitLoss)
  );

  const grossLoss = Math.abs(
    sum(losses.map((trade) => trade.profitLoss))
  );

  const netProfit =
    grossProfit - grossLoss;

  const averageRR = average(
    trades.map((trade) => trade.rrRatio)
  );

  const winRate = percentage(
    wins.length,
    wins.length + losses.length
  );

  const profitFactor =
    grossLoss === 0
      ? grossProfit
      : Number(
          (grossProfit / grossLoss).toFixed(2)
        );

  return {
    totalTrades: trades.length,

    wins: wins.length,

    losses: losses.length,

    winRate,

    grossProfit,

    grossLoss,

    netProfit,

    averageRR,

    profitFactor,
  };
};

/* ------------------------------------------ */
/* Monthly Profit */
/* ------------------------------------------ */

export const getMonthlyPnL = (trades) => {
  const months = {};

  trades.forEach((trade) => {
    const date = new Date(trade.tradeDate);

    const key = `${date.getFullYear()}-${date.getMonth() + 1}`;

    months[key] ??= 0;

    months[key] += trade.profitLoss;
  });

  return Object.entries(months).map(
    ([month, profit]) => ({
      month,
      profit,
    })
  );
};


/* ------------------------------------------ */
/* Equity Curve */
/* ------------------------------------------ */

export const getEquityCurve = (trades) => {
  let equity = 0;

  return trades.map((trade) => {
    equity += trade.profitLoss;

    return {
      date: trade.tradeDate,
      equity: Number(equity.toFixed(2)),
    };
  });
};

/* ------------------------------------------ */
/* Drawdown */
/* ------------------------------------------ */

export const getDrawdown = (trades) => {
  let equity = 0;
  let peak = 0;
  let maxDrawdown = 0;

  trades.forEach((trade) => {
    equity += trade.profitLoss;

    if (equity > peak) {
      peak = equity;
    }

    const drawdown = peak - equity;

    if (drawdown > maxDrawdown) {
      maxDrawdown = drawdown;
    }
  });

  return Number(maxDrawdown.toFixed(2));
};

/* ------------------------------------------ */
/* Strategy Distribution */
/* ------------------------------------------ */

export const getStrategyDistribution = (trades) => {
  const strategies = {};

  trades.forEach((trade) => {
    const strategy = trade.strategy || "Other";

    if (!strategies[strategy]) {
      strategies[strategy] = 0;
    }

    strategies[strategy]++;
  });

  return Object.entries(strategies).map(
    ([strategy, total]) => ({
      strategy,
      total,
    })
  );
};

/* ------------------------------------------ */
/* Timeframe Distribution */
/* ------------------------------------------ */

export const getTimeframeDistribution = (trades) => {
  const map = {};

  trades.forEach((trade) => {
    const timeframe = trade.timeframe || "Unknown";

    if (!map[timeframe]) {
      map[timeframe] = 0;
    }

    map[timeframe]++;
  });

  return Object.entries(map).map(
    ([timeframe, total]) => ({
      timeframe,
      total,
    })
  );
};

/* ------------------------------------------ */
/* Recent Trades */
/* ------------------------------------------ */

export const getRecentTrades = (trades) => {
  return [...trades]
    .sort(
      (a, b) =>
        new Date(b.tradeDate).getTime() -
        new Date(a.tradeDate).getTime()
    )
    .slice(0, 5);
};


/* ------------------------------------------ */
/* Current Streak */
/* ------------------------------------------ */

export const getCurrentStreak = (trades) => {
  if (!trades.length) {
    return {
      type: "NONE",
      count: 0,
    };
  }

  const ordered = [...trades].sort(
    (a, b) =>
      new Date(b.tradeDate) -
      new Date(a.tradeDate)
  );

  const latestOutcome = ordered[0].outcome;

  if (
    latestOutcome !== "WIN" &&
    latestOutcome !== "LOSS"
  ) {
    return {
      type: "NONE",
      count: 0,
    };
  }

  let count = 0;

  for (const trade of ordered) {
    if (trade.outcome === latestOutcome) {
      count++;
    } else {
      break;
    }
  }

  return {
    type: latestOutcome,
    count,
  };
};

/* ------------------------------------------ */
/* Rule Based Insights */
/* ------------------------------------------ */

export const getInsights = (trades) => {
  const analytics = getAnalytics(trades);

  const insights = [];

  if (analytics.winRate >= 70) {
    insights.push({
      type: "success",
      title: "Excellent Win Rate",
      description: "Your win rate is above 70%.",
    });
  }

  if (analytics.averageRR >= 3) {
    insights.push({
      type: "success",
      title: "Excellent Risk Reward",
      description: "Average RR exceeds 1:3.",
    });
  }

  if (analytics.profitFactor < 1.2) {
    insights.push({
      type: "warning",
      title: "Low Profit Factor",
      description: "Consider improving trade selection.",
    });
  }

  if (!insights.length) {
    insights.push({
      type: "info",
      title: "Keep Building Data",
      description:
        "More completed trades will produce stronger insights.",
    });
  }

  return insights;
};

/* ------------------------------------------ */
/* Dashboard */
/* ------------------------------------------ */

export const getDashboard = async (userId) => {
  const trades = await getTrades(userId);

  return {
    portfolio: getPortfolioSummary(trades),

    analytics: getAnalytics(trades),

    charts: {
      monthlyPnL: getMonthlyPnL(trades),

      equityCurve: getEquityCurve(trades),

      strategyDistribution:
        getStrategyDistribution(trades),

      timeframeDistribution:
        getTimeframeDistribution(trades),
    },

    recentTrades: getRecentTrades(trades),

    streak: getCurrentStreak(trades),

    insights: getInsights(trades),

    drawdown: getDrawdown(trades),
  };
};




//  Close Trades

export const closeTrade = async ( id, exitPrice ) => {
   return await Trade.findByIdAndUpdate(
    id,
    {
      exitPrice: exitPrice,
      outcome: exitPrice > 0 ? "WIN" : "LOSS",
      closedAt: new Date(),
    },
    { new: true }
  );
}