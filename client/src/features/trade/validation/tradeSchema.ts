import { z } from "zod";

import {
  ACCOUNT_TYPES,
  ASSET_CLASSES,
  MARKET_CONDITIONS,
  MOODS,
  ORDER_TYPES,
  SOURCES,
  STRATEGIES,
  TIMEFRAMES,
} from "../constants/tradeConstants";

export const tradeSchema = z.object({
  /**
   * ============================================================================
   * Trade Information
   * ============================================================================
   */
  broker: z
    .string()
    .trim()
    .max(100, "Broker name is too long")
    .optional(),

  accountNumber: z
    .string()
    .trim()
    .max(50, "Account number is too long")
    .optional(),

  accountType: z.enum(ACCOUNT_TYPES, {
    error: "Account type is required",
  }),

  source: z.enum(SOURCES, {
    error: "Trade source is required",
  }),

  assetClass: z.enum(ASSET_CLASSES, {
    error: "Asset class is required",
  }),

  pair: z
    .string()
    .trim()
    .min(1, "Trading pair is required"),

  /**
   * ============================================================================
   * Trade Setup
   * ============================================================================
   */
  orderType: z.enum(ORDER_TYPES, {
    error: "Order type is required",
  }),

  timeframe: z.enum(TIMEFRAMES, {
    error: "Timeframe is required",
  }),

  strategy: z.enum(STRATEGIES, {
    error: "Strategy is required",
  }),

  marketCondition: z.enum(MARKET_CONDITIONS, {
    error: "Market condition is required",
  }),

  tradeDate: z.string().optional(),

  /**
   * ============================================================================
   * Position
   * ============================================================================
   */
  entry: z
    .number({
      error: "Entry price is required",
    })
    .positive("Entry price must be greater than 0"),

  stopLoss: z
    .number({
      error: "Stop Loss is required",
    })
    .positive("Stop Loss must be greater than 0"),

  takeProfit: z
    .number({
      error: "Take Profit is required",
    })
    .positive("Take Profit must be greater than 0"),

  lotSize: z
    .number({
      error: "Lot size is required",
    })
    .positive("Lot size must be greater than 0"),

  /**
   * ============================================================================
   * Psychology
   * ============================================================================
   */
  psychology: z.object({
    mood: z.enum(MOODS),

    confidence: z
      .number()
      .min(0)
      .max(10),

    discipline: z
      .number()
      .min(0)
      .max(10),

    stress: z
      .number()
      .min(0)
      .max(10),
  }),

  /**
   * ============================================================================
   * Notes
   * ============================================================================
   */
  notes: z
    .string()
    .trim()
    .max(2000, "Notes cannot exceed 2000 characters")
    .optional(),
});

export type TradeFormData = z.infer<typeof tradeSchema>;