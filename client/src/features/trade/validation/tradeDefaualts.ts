import type { TradeFormData } from "../validation/tradeSchema";

export const defaultTradeValues: TradeFormData = {
    /**
     * ============================================================================
     * Trade Information
     * ============================================================================
     */
    broker: "",
    accountNumber: "",
    accountType: "Demo",
    source: "MANUAL",
    assetClass: "Forex",
    pair: "",

    /**
     * ============================================================================
     * Trade Setup
     * ============================================================================
     */
    orderType: "BUY",
    timeframe: "15M",
    strategy: "SMC",          // replace with one of your actual enum values
    marketCondition: "Trending", // replace with one of your actual enum values
    tradeDate: "",

    /**
     * ============================================================================
     * Position
     * ============================================================================
     */
    entry: 0,
    stopLoss: 0,
    takeProfit: 0,
    lotSize: 0,

    /**
     * ============================================================================
     * Psychology
     * ============================================================================
     */
    psychology: {
        mood: "Neutral", // replace if your enum uses a different value
        confidence: 5,
        discipline: 5,
        stress: 5,
    },

    /**
     * ============================================================================
     * Notes
     * ============================================================================
     */
    notes: "",
};