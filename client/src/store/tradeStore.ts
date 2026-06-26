import { create } from "zustand";
import * as tradeService from "../services/tradeService";
import type { Trade } from "../types/trade"


interface TradeStore {
  trades: Trade[];
  loading: boolean;
  error:  string | null;
 deleteTrade: (
      id: string
  ) => Promise<void>;

  fetchTrades: () => Promise<void>;
  createTrade: (
    tradeData: Record<string, unknown>
  ) => Promise<void>;

  updateTrade: (
      id: string,
      tradeData: Record<string, unknown>
  ) => Promise<void>;
}

export const useTradeStore = create<TradeStore>(
  (set) => ({
    trades: [],
    loading: false,
    error: null,

    fetchTrades: async () => {
        try {
          set({
            loading: true,
            error: null,
          });

          const trades = await tradeService.getTrades();

          set({
            trades,
            loading: false,
            error: null,
          });

        } catch (error) {
          console.error(error);

          set({
            loading: false,
            error: "Unable to load trades.",
          });
        }
      },

      deleteTrade: async (id) => {

          try {

              await tradeService.deleteTrade(id);

              const trades =
                  await tradeService.getTrades();

              set({
                  trades,
              });

          } catch (error) {

              console.error(error);

          }

      },

      updateTrade: async (
          id,
          tradeData
      ) => {

          try {

              await tradeService.updateTrade(
                  id,
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