export function getRiskAnalytics(trades) {

    const closedTrades = trades.filter(
        trade => trade.status === "CLOSED"
    );

    if (closedTrades.length === 0) {
        return {
            averageRisk: 0,
            averageReward: 0,
            averageRR: 0,
            totalRisk: 0,
            totalReward: 0,
        };
    }

    return {
        averageRisk:
            closedTrades.reduce((a, b) => a + (b.riskAmount ?? 0 ), 0 )/
            closedTrades.length,

        averageReward: 
            closedTrades.reduce((a, b) => a + (b.rewardAmount ?? 0 ), 0 )/
            closedTrades.length,

        averageRR:
            closedTrades.reduce((a, b) => a + (b.rrRatio ?? 0 ), 0 )/
            closedTrades.length,

        totalRisk:
            closedTrades.reduce((a, b) => a + (b.riskAmount ?? 0 ), 0 ),

        totalReward: 
            closedTrades.reduce((a, b) => a + (b.rewardAmount ?? 0 ), 0 ),

    }

  };