/**
 * ============================================================================
 * Trade Calculator
 * ============================================================================
 */

/**
 * Calculate trade metrics from entry parameters.
 */
export function calculateTradeMetrics(
    entry,
    stopLoss,
    takeProfit
) {
    const risk = Math.abs(entry - stopLoss);

    if (risk === 0) {
        throw new Error(
            "Entry price and Stop Loss cannot be equal."
        );
    }

    const reward = Math.abs(
        takeProfit - entry
    );

    const rrRatio = Number(
        (reward / risk).toFixed(2)
    );

    let setupRating = "STANDARD";

    if (rrRatio >= 6) {
        setupRating = "ELITE";
    } else if (rrRatio >= 5) {
        setupRating = "A++";
    } else if (rrRatio >= 3) {
        setupRating = "A+";
    }

    return {
        riskAmount: Number(risk.toFixed(2)),
        rewardAmount: Number(
            reward.toFixed(2)
        ),
        rrRatio,
        setupRating,
    };
}

