import type { CreateTradeDto } from "../../types/createTrade";

export const defaultTradeValues: CreateTradeDto = {
    broker: "",
    accountNumber: "",
    accountType: "Live",

    source: "MANUAL",

    pair: "",

    assetClass: "Forex",

    orderType: "BUY",

    entry: 0,

    stopLoss: 0,

    takeProfit: 0,

    lotSize: 0.01,

    timeframe: "15M",

    strategy: "SMC",

    marketCondition: "Trending",

    psychology: {
        mood: "Neutral",
        confidence: 5,
        discipline: 5,
        stress: 5,
    },

    notes: "",
};