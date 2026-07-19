import type {
  ACCOUNT_TYPES,
  ASSET_CLASSES,
  MARKET_CONDITIONS,
  MOODS,
  ORDER_TYPES,
  SOURCES,
  STRATEGIES,
  TIMEFRAMES,
} from "../constants/tradeConstants";

export interface CreateTradeDto {
  broker?: string;

  accountNumber?: string;

  accountType?: (typeof ACCOUNT_TYPES)[number];

  source?: (typeof SOURCES)[number];

  assetClass?: (typeof ASSET_CLASSES)[number];

  pair: string;

  orderType: (typeof ORDER_TYPES)[number];

  timeframe: (typeof TIMEFRAMES)[number];

  strategy: (typeof STRATEGIES)[number];

  marketCondition?: (typeof MARKET_CONDITIONS)[number];

  tradeDate?: string;

  entry: number;

  stopLoss: number;

  takeProfit: number;

  lotSize: number;

  psychology?: {
    mood?: (typeof MOODS)[number];
    confidence?: number;
    discipline?: number;
    stress?: number;
  };

  notes?: string;
}