import type { TradeFormData } from "../validation/tradeSchema";

import {
    DEFAULT_ACCOUNT_TYPE,
    DEFAULT_ASSET_CLASS,
    DEFAULT_MARKET_CONDITION,
    DEFAULT_ORDER_TYPE,
    DEFAULT_PSYCHOLOGY,
    DEFAULT_SOURCE,
    DEFAULT_STRATEGY,
    DEFAULT_TIMEFRAME,
} from "../constants/tradeConstants";

export const defaultTradeValues: TradeFormData = {
    broker: "",
    accountNumber: "",
    accountType: DEFAULT_ACCOUNT_TYPE,
    source: DEFAULT_SOURCE,
    assetClass: DEFAULT_ASSET_CLASS,
    pair: "",

    orderType: DEFAULT_ORDER_TYPE,
    timeframe: DEFAULT_TIMEFRAME,
    strategy: DEFAULT_STRATEGY,
    marketCondition: DEFAULT_MARKET_CONDITION,
    tradeDate: "",

    entry: 0,
    stopLoss: 0,
    takeProfit: 0,
    lotSize: 0,

    psychology: DEFAULT_PSYCHOLOGY,

    notes: "",
};