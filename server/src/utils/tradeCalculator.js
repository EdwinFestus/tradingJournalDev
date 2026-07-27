/**
 * ============================================================================
 * Trade Calculator
 * ============================================================================
 * Centralized trading calculations for Project ELLA.
 * Every trade calculation should come from this file.
 * ============================================================================
 */

/**
 * Calculate all derived trade metrics.
 *
 * @param {number} entry
 * @param {number} stopLoss
 * @param {number} takeProfit
 *
 * @returns {{
 *   riskAmount: number,
 *   rewardAmount: number,
 *   rrRatio: number,
 *   setupRating: string
 * }}
 */
export function calculateTradeMetrics(
    entry,
    stopLoss,
    takeProfit
) {
    if (
        typeof entry !== "number" ||
        typeof stopLoss !== "number" ||
        typeof takeProfit !== "number"
    ) {
        throw new Error(
            "Entry, Stop Loss and Take Profit must be numbers."
        );
    }

    const risk = Math.abs(entry - stopLoss);

    if (risk === 0) {
        throw new Error(
            "Entry price and Stop Loss cannot be equal."
        );
    }

    const reward = Math.abs(takeProfit - entry);

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
        rewardAmount: Number(reward.toFixed(2)),
        rrRatio,
        setupRating,
    };
}

/**
 * Calculate holding time in minutes.
 */
export function calculateHoldingTime(
    tradeDate,
    closedAt
) {
    if (!tradeDate || !closedAt) {
        return 0;
    }

    const opened = new Date(tradeDate);
    const closed = new Date(closedAt);

    return Math.max(
        0,
        Math.round(
            (closed.getTime() -
                opened.getTime()) /
                60000
        )
    );
}

/**
 * Calculate net profit after commission and swap.
 */
export function calculateNetProfit(
    profitLoss,
    commission = 0,
    swap = 0
) {
    return Number(
        (profitLoss - commission - swap).toFixed(2)
    );
}