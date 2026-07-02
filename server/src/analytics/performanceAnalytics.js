export function getPerformanceAnalytics(trades) {
    const closed = trades.filter(t => t.status === "CLOSED");

    if (!closed.length) {
        return {
            averageWin: 0,
            averageLoss: 0,
            largestWin: 0,
            largestLoss: 0,
            averageRR: 0,
            expectancy: 0,
        };
    }

    const wins = closed.filter(t => t.outcome === "WIN");
    const losses = closed.filter(t => t.outcome === "LOSS");

    return {
        averageWin:
            wins.reduce((a, b) => a + b.profitLoss, 0) /
            (wins.length || 1),

        averageLoss:
            losses.reduce((a, b) => a + Math.abs(b.profitLoss), 0) /
            (losses.length || 1),

        largestWin: Math.max(
            ...wins.map(t => t.profitLoss),
            0
        ),

        largestLoss: Math.max(
            ...losses.map(t => Math.abs(t.profitLoss)),
            0
        ),

        averageRR:
            closed.reduce((a, b) => a + b.rrRatio, 0) /
            closed.length,
    };
}