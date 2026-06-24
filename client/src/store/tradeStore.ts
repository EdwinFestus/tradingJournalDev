import { create } from "zustand";
import * as tradeService from "../services/tradeService";
import type { Trade } from "../types/trade"


interface TradeStore {
  trades: Trade[];
  loading: boolean;

  fetchTrades: () => Promise<void>;

  createTrade: (
    tradeData: Record<string, unknown>
  ) => Promise<void>;
}

export const useTradeStore = create<TradeStore>(
  (set) => ({
    trades: [],
    loading: false,

    fetchTrades: async () => {
      try {
        set({ loading: true });

        const trades =
          await tradeService.getTrades();

        set({
          trades,
          loading: false,
        });
      } catch (error) {
        console.error(error);

        set({
          loading: false,
        });
      }
    },

    createTrade: async (
      tradeData
    ) => {
      try {
        await tradeService.createTrade(
          tradeData
        );

        const trades =
          await tradeService.getTrades();

        set({
          trades,
        });
      } catch (error) {
        console.error(error);
      }
    },
  })
);