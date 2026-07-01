import express from "express";
import protect from "../middleware/authMiddleware.js";
import { getDashboardData } from "../controllers/dashboardControllers.js";

const router = express.Router();

/**
 * GET /api/dashboard
 */
router.get("/", protect, getDashboardData);

export default router;