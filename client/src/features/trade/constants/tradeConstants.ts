/**
 * ============================================================================
 * Trade Constants
 * ============================================================================
 */

export const ACCOUNT_TYPES = [
  "Demo",
  "Live",
  "Funded",
] as const;

export const SOURCES = [
  "MANUAL",
  "MT4",
  "MT5",
  "BYBIT",
  "BINANCE",
  "DERIV",
  "API",
] as const;

export const ASSET_CLASSES = [
  "Forex",
  "Synthetic",
  "Crypto",
  "Indices",
  "Stocks",
  "Commodities",
] as const;

export const ORDER_TYPES = [
  "BUY",
  "SELL",
] as const;

export const TIMEFRAMES = [
  "1M",
  "5M",
  "15M",
  "30M",
  "1H",
  "4H",
  "1D",
] as const;

export const STRATEGIES = [
  "Liquidity Sweep",
  "Liquidity Grab",
  "SMC",
  "ICT",
  "Order Block",
  "Breaker Block",
  "Mitigation Block",
  "Fair Value Gap",
  "Trendline Break",
  "Breakout",
  "Expansion",
  "Pullback",
  "Retest",
  "Double Top",
  "Double Bottom",
  "Head &Shoulders",
  "Supply & Demand",
  "Support & Resistance",
  "Range Reversal",
  "Scalping",
  "Swing Trading",
  "Custom",
] as const;

export const MARKET_CONDITIONS = [
  "Trending",
  "Ranging",
  "Volatile",
  "Breakout",
  "Reversal",
] as const;

export const MOODS = [
  "Confident",
  "Calm",
  "Neutral",
  "Fear",
  "Greedy",
  "Frustrated",
  "Revenge",
  "FOMO",
] as const;

export const SETUP_RATINGS = [
  "STANDARD",
  "A+",
  "A++",
  "ELITE",
] as const;

export const OUTCOMES = [
  "OPEN",
  "WIN",
  "LOSS",
  "BE",
] as const;

/**
 * ============================================================================
 * Default Values
 * ============================================================================
 */

export const DEFAULT_PSYCHOLOGY = {
  mood: "Neutral" as const,
  confidence: 5,
  discipline: 5,
  stress: 5,
};


export const DEFAULT_ACCOUNT_TYPE = "Demo" as const;

export const DEFAULT_SOURCE = "MANUAL" as const;

export const DEFAULT_ASSET_CLASS = "Forex" as const;

export const DEFAULT_ORDER_TYPE = "BUY" as const;

export const DEFAULT_TIMEFRAME = "15M" as const;

export const DEFAULT_STRATEGY = "SMC" as const;

export const DEFAULT_MARKET_CONDITION = "Trending" as const;