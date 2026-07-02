export function calculateRR(entry, stopLoss, takeProfit) {
    const risk = Math.abs(entry - stopLoss);

    if (risk === 0) return 0;

    const reward = Math.abs(takeProfit - entry);

    return Number((reward / risk).toFixed(2));
}

export function calculateHoldingTime(opened, closed) {

    const diff = closed.getTime() - opened.getTime();

    const hours = diff / (1000 * 60 * 60);

    return Number(hours.toFixed(2));

}

export function determineOutcome(profitLoss) {

    if (profitLoss > 0) return "WIN";

    if (profitLoss < 0) return "LOSS";

    return "BE";

}