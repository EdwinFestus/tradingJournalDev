import { z } from "zod";

export const tradeSchema = z.object({
  pair: z.string().min(1, "Pair is required"),

  orderType: z.enum(["BUY", "SELL"]),

  strategy: z.string().min(1, "Strategy is required"),

  entry: z.number().positive("Entry is required"),

  timeframe: z.enum([
    "1M",
    "5M",
    "15M",
    "30M",
    "1H",
    "4H",
    "1D",
    ]),

  stopLoss: z.number().positive("Stop Loss is required"),

  takeProfit: z.number().positive("Take Profit is required"),

  lotSize: z.number().positive("Lot Size is required"),

  notes: z.string().optional(),
});

export type TradeFormData = z.infer<typeof tradeSchema>;