export interface Trade {
  _id: string;

  pair: string;
  orderType: string;

  entry: number;
  stopLoss: number;
  takeProfit: number;

  lotSize: number;

  rrRatio: number;

  riskAmount: number;
  rewardAmount: number;

  setupRating: string;

  strategy: string;

  timeframe: string;

  notes: string;

  createdAt: string;
}