import {
    randomItem,
    randomNumber,
    chance,
} from "../utils/random.js";

import {
    generatePrices,
} from "./priceGenerator.js";

import {
    generateTradeDate,
} from "./dateGenerator.js";

import {
    generateMood,
} from "./psychologyGenerator.js";

import {
    generateOutcome,
} from "./outcomeGenerator.js";

import {
    calculateProfitLoss,
} from "./profitGenerator.js";

import {
    PAIRS,
    STRATEGIES,
    ACCOUNT_TYPES,
    TIMEFRAMES,
    MARKET_CONDITIONS,
    TRADING_STYLES,
    SESSIONS,
    SOURCES,
    SETUP_RATINGS,
    TAGS,
} from "./tradeConstants.js";

export function generateTrade(userId, index) {

    const orderType =
        chance(50)
            ? "BUY"
            : "SELL";

    const prices =
        generatePrices(orderType);

    const outcome =
        generateOutcome();

    const tradeDate =
        generateTradeDate(index);

    const closedAt = new Date(
        tradeDate.getTime() +
        randomNumber(15, 720) * 60000
    );

    const exitPrice =
        outcome === "WIN"
            ? prices.takeProfit
            : outcome === "LOSS"
                ? prices.stopLoss
                : prices.entry;

    return {

        user: userId,

        pair: randomItem(PAIRS),

        orderType,

        entry: prices.entry,

        stopLoss: prices.stopLoss,

        takeProfit: prices.takeProfit,

        lotSize: randomItem([
            0.01,
            0.02,
            0.05,
            0.10,
            0.20,
            0.50,
        ]),

        accountType:
            randomItem(ACCOUNT_TYPES),

        strategy:
            randomItem(STRATEGIES),

        marketCondition:
            randomItem(MARKET_CONDITIONS),

        mood:
            generateMood(),

        tradingStyle:
            randomItem(TRADING_STYLES),

        timeframe:
            randomItem(TIMEFRAMES),

        tradeDate,

        setupRating:
            randomItem(SETUP_RATINGS),

        notes:
            "Generated development trade.",

        tag:
            randomItem(TAGS),

        exitPrice,

        status: "CLOSED",

        outcome,

        session:
            randomItem(SESSIONS),

        source:
            randomItem(SOURCES),

        commission:
            randomNumber(0, 8),

        swap:
            randomNumber(-3, 3),

        exitReason:
            outcome === "WIN"
                ? "TAKE_PROFIT"
                : outcome === "LOSS"
                    ? "STOP_LOSS"
                    : "MANUAL",

        closedAt,

        holdingTimeMinutes:
            Math.floor(
                (closedAt.getTime() -
                    tradeDate.getTime()) /
                60000
            ),

        isDeleted: false,

        isPartialClose:
            chance(8),

        beforeImage: "",

        afterImage: "",

        profitLoss:
            calculateProfitLoss(
                orderType,
                outcome,
                prices
            ),
    };

}