import express from "express";
import protect from "../middleware/authMiddleware.js";

import {
    getTrades,
    getTrade,
    createTrade,
    updateTrade,
    closeTrade,
    archiveTrade,
    restoreTrade,
    deleteTrade,
} from "../controllers/tradeController.js";

const router = express.Router();

/**
 * Create Trade
 * Get All Trades
 */
router
  .route("/")
  .post(protect, createTrade)
  .get(protect, getTrades);

/**
 * Get Single Trade
 * Update Trade
 * Delete Trade
 */
router
  .route("/:id")
  .get(protect, getTrade)
  .patch(protect, updateTrade)
  .delete(protect, deleteTrade);


router.patch(
    "/:id/close",
    protect,
    closeTrade
);

/**
 * PATCH /api/trades/:id/archive
 */
router.patch(
    "/:id/archive",
    protect,
    archiveTrade
);


export default router;