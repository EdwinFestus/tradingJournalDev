import { create } from "zustand";

import * as tradeService from "../services/tradeService";

import type { Trade } from "../types/trade";
import type { CreateTradeDto } from "../types/createTrade";

/**
 * ============================================================================
 * Pagination
 * ============================================================================
 */
interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

/**
 * ============================================================================
 * Trade Store
 * ============================================================================
 */
interface TradeStore {
  trades: Trade[];
  pagination: Pagination | null;

  loading: boolean;
  error: string | null;

  fetchTrades: () => Promise<void>;

  createTrade: (
    tradeData: CreateTradeDto
  ) => Promise<void>;

  updateTrade: (
    id: string,
    tradeData: Record<string, unknown>
  ) => Promise<void>;

  deleteTrade: (
    id: string
  ) => Promise<void>;
}

export const useTradeStore = create<TradeStore>((set) => {
  /**
   * --------------------------------------------------------------------------
   * Reload trades after every CRUD operation
   * --------------------------------------------------------------------------
   */
  const refreshTrades = async () => {
    const result =
      await tradeService.getTrades();

    set({
      trades: result.trades,
      pagination: result.pagination,
    });
  };

  return {
    trades: [],
    pagination: null,

    loading: false,
    error: null,

    /**
     * --------------------------------------------------------------------------
     * Fetch Trades
     * --------------------------------------------------------------------------
     */
    fetchTrades: async () => {
      try {
        set({
          loading: true,
          error: null,
        });

        await refreshTrades();

        set({
          loading: false,
        });

      } catch (error) {
        console.error(error);

        set({
          loading: false,
          error:
            error instanceof Error
              ? error.message
              : "Unable to load trades.",
        });
      }
    },

    /**
     * --------------------------------------------------------------------------
     * Create Trade
     * --------------------------------------------------------------------------
     */
    createTrade: async (tradeData) => {
      try {
        await tradeService.createTrade(tradeData);

        await refreshTrades();
      } catch (error) {
        console.error("Create Trade Error:", error)

        throw error;
      }
    },
    /**
     * --------------------------------------------------------------------------
     * Update Trade
     * --------------------------------------------------------------------------
     */
    updateTrade: async (
      id,
      tradeData
    ) => {
      try {
        await tradeService.updateTrade(
          id,
          tradeData
        );

        await refreshTrades();

      } catch (error) {
        console.error(error);
      }
    },

    /**
     * --------------------------------------------------------------------------
     * Delete Trade
     * --------------------------------------------------------------------------
     */
    deleteTrade: async (
      id
    ) => {
      try {
        await tradeService.deleteTrade(
          id
        );

        console.log(
          `Trade ${id} deleted successfully.`
        );

        await refreshTrades();

      } catch (error) {
        console.error(error);
      }
    },
  };
});