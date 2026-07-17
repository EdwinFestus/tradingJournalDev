export interface CreateTradeDto {
  pair: string;

  orderType: "BUY" | "SELL";

  entry: number;

  stopLoss: number;

  takeProfit: number;

  lotSize: number;

  strategy: string;

  timeframe ? : string;

  notes?: string;
}