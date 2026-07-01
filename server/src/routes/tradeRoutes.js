import express from "express";
import protect from "../middleware/authMiddleware.js";

import {
  createTrade,
  getTrades,
  getTradeById,
  updateTrade,
  closeTrade,
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
  .get(protect, getTradeById)
  .patch(protect, updateTrade)
  .delete(protect, deleteTrade);


router.patch(
    "/:id/close",
    protect,
    closeTrade
);

export default router;