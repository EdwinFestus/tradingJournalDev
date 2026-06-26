export interface Trade {
  id: number;
  pair: string;
  direction: "BUY" | "SELL";
  strategy: string;
  entry: number;
  stopLoss: number;
  takeProfit: number;
  rr: string;
  result: number;
  status: "Win" | "Loss" | "Breakeven";
}

export const tradeRows: Trade[] = [
  {
    id: 1,
    pair: "Volatility 75",
    direction: "BUY",
    strategy: "Liquidity Grab",
    entry: 4576.27,
    stopLoss: 4548.21,
    takeProfit: 4690.84,
    rr: "1:4",
    result: 320,
    status: "Win",
  },
  {
    id: 2,
    pair: "Volatility 10",
    direction: "SELL",
    strategy: "Breakout",
    entry: 1864.2,
    stopLoss: 1881.5,
    takeProfit: 1810.7,
    rr: "1:3",
    result: -120,
    status: "Loss",
  },
  {
    id: 3,
    pair: "Volatility 75 (1s)",
    direction: "BUY",
    strategy: "Support & Resistance",
    entry: 5120.8,
    stopLoss: 5094.1,
    takeProfit: 5218.3,
    rr: "1:5",
    result: 480,
    status: "Win",
  },
];