export interface Trade {
  _id: string;
  id?: string;

  user?: string;

  pair: string;

  orderType: "BUY" | "SELL";

  entry: number;
  stopLoss: number;
  takeProfit: number;
  exitPrice: number;

  lotSize: number;

  accountType:
    | "Personal"
    | "Challenge"
    | "Funded"
    | "Demo";

  strategy:
    | "SMC"
    | "Liquidity Grab"
    | "Trendline Break"
    | "Double Top"
    | "Double Bottom"
    | "Head &Shoulders"
    | "Expansion"
    | "Liquidity Sweep"
    | "Other";

  marketCondition: string;

  mood: string;

  tradingStyle:
    | "Conservative"
    | "Aggressive";

  riskAmount: number;
  rewardAmount: number;
  rrRatio: number;

  timeframe:
    | "1M"
    | "5M"
    | "15M"
    | "30M"
    | "1H"
    | "4H"
    | "1D";

  tradeDate: string;

  setupRating:
    | "STANDARD"
    | "A+"
    | "A++"
    | "ELITE";

  notes: string;

  tag?: string;

  profitLoss: number;

  beforeImage: string;
  afterImage: string;

  status:
    | "OPEN"
    | "CLOSED"
    | "ARCHIVED";

  outcome:
    | "WIN"
    | "LOSS"
    | "BE"
    | "MANUAL_CLOSE"
    | null;

  source: string;

  commission: number;
  swap: number;

  holdingTimeMinutes: number;

  isClosed: boolean;
  isDeleted: boolean;
  isPartialClose: boolean;

  createdAt: string;
  updatedAt: string;
}