import * as repository from "../repositories/tradeRepository.js";
import { buildDashboard } from "../dashboard/dashboardBuilder.js";

/**
 * Return dashboard snapshot after any mutation.
 */
async function refreshDashboard(userId) {
    const trades = await repository.findAllByUser(userId);
    return buildDashboard(trades);
}

/**
 * Make sure trade belongs to current user.
 */
async function getOwnedTrade(tradeId, userId) {
    const trade = await repository.findByIdAndUser(tradeId, userId);

    if (!trade) {
        throw new Error("Trade not found.");
    }

    return trade;
}

/**
 * Get paginated trades
 */
export async function getTrades(userId, options = {}) {
    return repository.findByUser(userId, options);
}

/**
 * Get single trade
 */
export async function getTrade(tradeId, userId) {
    return getOwnedTrade(tradeId, userId);
}

/**
 * Create trade
 */
export async function createTrade(userId, tradeData) {
    const trade = await repository.create({
        ...tradeData,
        user: userId,
    });

    const dashboard = await refreshDashboard(userId);

    return {
        trade,
        dashboard,
    };
}

/**
 * Update trade
 */
export async function updateTrade(
    tradeId,
    userId,
    updates
) {
    const trade = await getOwnedTrade(tradeId, userId);

    Object.assign(trade, updates);

    await repository.save(trade);

    const dashboard = await refreshDashboard(userId);

    return {
        trade,
        dashboard,
    };
}

/**
 * Close trade
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
        throw new Error("Trade already closed.");
    }

    trade.exitPrice = exitPrice;

    trade.exitReason = exitReason;

    trade.status = "CLOSED";

    trade.closedAt = new Date();

    //----------------------------------------
    // Holding Time
    //----------------------------------------

    trade.holdingTimeMinutes = Math.floor(
        (trade.closedAt.getTime() -
            trade.tradeDate.getTime()) /
        60000
    );

    //----------------------------------------
    // Profit / Loss
    //----------------------------------------

    let pnl = 0;

    if (trade.orderType === "BUY") {

        pnl =
            (exitPrice - trade.entry) *
            trade.lotSize;

    } else {

        pnl =
            (trade.entry - exitPrice) *
            trade.lotSize;

    }

    trade.profitLoss = Number(
        pnl.toFixed(2)
    );

    //----------------------------------------
    // Outcome
    //----------------------------------------

    if (trade.profitLoss > 0) {

        trade.outcome = "WIN";

    } else if (trade.profitLoss < 0) {

        trade.outcome = "LOSS";

    } else {

        trade.outcome = "BE";

    }

    await repository.save(trade);

    const dashboard =
        await refreshDashboard(userId);

    return {

        trade,

        dashboard,

    };
}

/**
 * Archive trade
 */
export async function archiveTrade(
    tradeId,
    userId
) {

    const trade =
        await getOwnedTrade(
            tradeId,
            userId
        );

    trade.status = "ARCHIVED";

    await repository.save(trade);

    const dashboard =
        await refreshDashboard(userId);

    return {

        trade,

        dashboard,

    };

}

/**
 * Restore archived trade
 */
export async function restoreTrade(
    tradeId,
    userId
) {

    const trade =
        await getOwnedTrade(
            tradeId,
            userId
        );

    trade.status = "OPEN";

    await repository.save(trade);

    const dashboard =
        await refreshDashboard(userId);

    return {

        trade,

        dashboard,

    };

}

/**
 * Soft delete
 */
export async function deleteTrade(
    tradeId,
    userId
) {

    const trade =
        await getOwnedTrade(
            tradeId,
            userId
        );

    trade.isDeleted = true;

    trade.deletedAt = new Date();

    await repository.save(trade);

    const dashboard =
        await refreshDashboard(userId);

    return {

        dashboard,

    };

}