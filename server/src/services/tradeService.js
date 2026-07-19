import * as repository from "../repositories/tradeRepository.js";
import { buildDashboard } from "../dashboard/dashboardBuilder.js";
import { calculateTradeMetrics } from "../utils/tradeCalculator.js";

/* =============================================================================
 * Dashboard Helpers
 * ============================================================================= */

/**
 * Build the latest dashboard snapshot.
 */
async function refreshDashboard(userId) {
    const trades = await repository.findAllByUser(userId);
    return buildDashboard(trades);
}

/**
 * Standard response returned after every trade mutation.
 */
async function buildMutationResponse(userId, trade = null) {
    const dashboard = await refreshDashboard(userId);

    return {
        trade,
        dashboard,
    };
}

/* =============================================================================
 * Trade Helpers
 * ============================================================================= */

/**
 * Ensure the requested trade belongs to the authenticated user.
 */
async function getOwnedTrade(tradeId, userId) {
    const trade = await repository.findByIdAndUser(tradeId, userId);

    if (!trade) {
        throw new Error("Trade not found.");
    }

    return trade;
}

/**
 * Recalculate all trade metrics.
 */
function applyTradeMetrics(trade) {
    const metrics = calculateTradeMetrics(
        Number(trade.entry),
        Number(trade.stopLoss),
        Number(trade.takeProfit)
    );

    Object.assign(trade, metrics);
}

/* =============================================================================
 * Queries
 * ============================================================================= */

/**
 * Get paginated trades.
 */
export async function getTrades(userId, options = {}) {
    return repository.findByUser(userId, options);
}

/**
 * Get a single trade.
 */
export async function getTrade(tradeId, userId) {
    return getOwnedTrade(tradeId, userId);
}

/* =============================================================================
 * Commands
 * ============================================================================= */

/**
 * Create Trade
 */
export async function createTrade(userId, tradeData) {
    console.log("Incoming Trade Data");
    console.log(tradeData);

    const metrics = calculateTradeMetrics(
        Number(tradeData.entry),
        Number(tradeData.stopLoss),
        Number(tradeData.takeProfit)
    );

    console.log("Calculated Metrics");
    console.log(metrics);

    const trade = await repository.create({
        ...tradeData,
        ...metrics,
        user: userId,
    });

    console.log("Saved Trade");
    console.log({
        riskAmount: trade.riskAmount,
        rewardAmount: trade.rewardAmount,
        rrRatio: trade.rrRatio,
    });

    const dashboard = await refreshDashboard(userId);

    return {
        trade,
        dashboard,
    };
}

/**
 * Update Trade
 */
export async function updateTrade(
    tradeId,
    userId,
    updates
) {

    const trade = await getOwnedTrade(
        tradeId,
        userId
    );

    Object.assign(
        trade,
        updates
    );

    const shouldRecalculate =
        updates.entry !== undefined ||
        updates.stopLoss !== undefined ||
        updates.takeProfit !== undefined;

    if (shouldRecalculate) {
        applyTradeMetrics(trade);
    }

    await repository.save(trade);

    return buildMutationResponse(
        userId,
        trade
    );
}

/**
 * Close Trade
 */
export async function closeTrade(
    tradeId,
    userId,
    {
        exitPrice,
        exitReason = "MANUAL",
    }
) {

    const trade = await getOwnedTrade(
        tradeId,
        userId
    );

    if (trade.status === "CLOSED") {
        throw new Error(
            "Trade already closed."
        );
    }

    trade.exitPrice = Number(exitPrice);

    trade.exitReason = exitReason;

    trade.status = "CLOSED";

    trade.closedAt = new Date();

    trade.holdingTimeMinutes = Math.floor(
        (
            trade.closedAt.getTime() -
            trade.tradeDate.getTime()
        ) / 60000
    );

    const pnl =
        trade.orderType === "BUY"
            ? (trade.exitPrice - trade.entry) *
              trade.lotSize
            : (trade.entry - trade.exitPrice) *
              trade.lotSize;

    trade.profitLoss = Number(
        pnl.toFixed(2)
    );

    trade.outcome =
        trade.profitLoss > 0
            ? "WIN"
            : trade.profitLoss < 0
            ? "LOSS"
            : "BE";

    await repository.save(trade);

    return buildMutationResponse(
        userId,
        trade
    );
}

/**
 * Archive Trade
 */
export async function archiveTrade(
    tradeId,
    userId
) {

    const trade = await getOwnedTrade(
        tradeId,
        userId
    );

    trade.status = "ARCHIVED";

    await repository.save(trade);

    return buildMutationResponse(
        userId,
        trade
    );
}

/**
 * Restore Trade
 */
export async function restoreTrade(
    tradeId,
    userId
) {

    const trade = await getOwnedTrade(
        tradeId,
        userId
    );

    trade.status = "OPEN";

    await repository.save(trade);

    return buildMutationResponse(
        userId,
        trade
    );
}

/**
 * Soft Delete Trade
 */
export async function deleteTrade(
    tradeId,
    userId
) {

    const trade = await getOwnedTrade(
        tradeId,
        userId
    );

    trade.isDeleted = true;

    trade.deletedAt = new Date();

    await repository.save(trade);

    return buildMutationResponse(
        userId
    );
}