import api from "@/shared/api/api";

import type { Trade } from "../types/trade";
import type { CreateTradeDto } from "../types/createTrade";

/**
 * ============================================================================
 * API Response Types
 * ============================================================================
 */

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export interface TradeListResponse {
  trades: Trade[];
  pagination: Pagination;
}

/**
 * ============================================================================
 * GET ALL TRADES
 * ============================================================================
 */
export const getTrades = async (): Promise<TradeListResponse> => {
  const response =
    await api.get<ApiResponse<TradeListResponse>>(
      "/trades"
    );

  return response.data.data;
};

/**
 * ============================================================================
 * GET SINGLE TRADE
 * ============================================================================
 */
export const getTradeById = async (
  id: string
): Promise<Trade> => {
  const response =
    await api.get<ApiResponse<Trade>>(
      `/trades/${id}`
    );

  return response.data.data;
};

/**
 * ============================================================================
 * CREATE TRADE
 * ============================================================================
 */
export const createTrade = async (
  tradeData: CreateTradeDto
): Promise<Trade> => {
  const response =
    await api.post<ApiResponse<Trade>>(
      "/trades",
      tradeData
    );

  return response.data.data;
};

/**
 * ============================================================================
 * UPDATE TRADE
 * ============================================================================
 */
export const updateTrade = async (
  id: string,
  tradeData: Record<string, unknown>
): Promise<Trade> => {
  const response =
    await api.patch<ApiResponse<Trade>>(
      `/trades/${id}`,
      tradeData
    );

  return response.data.data;
};

/**
 * ============================================================================
 * CLOSE TRADE
 * ============================================================================
 */
export const closeTrade = async (
  id: string,
  tradeData: {
    exitPrice: number;
    commission?: number;
    slippage?: number;
  }
): Promise<Trade> => {
  const response =
    await api.patch<ApiResponse<Trade>>(
      `/trades/${id}/close`,
      tradeData
    );

  return response.data.data;
};

/**
 * ============================================================================
 * DELETE TRADE
 * ============================================================================
 */
export const deleteTrade = async (
  id: string
): Promise<void> => {
  await api.delete<ApiResponse<null>>(
    `/trades/${id}`
  );
};