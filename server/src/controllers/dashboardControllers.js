import { getDashboard } from "../services/dashboardService.js";

/**
 * ------------------------------------------
 * Dashboard Controller
 * ------------------------------------------
 * Returns all dashboard data in a single response.
 */

export const getDashboardData = async (req, res) => {
  try {
    const dashboard = await getDashboard(req.user._id);

    return res.status(200).json({
      success: true,
      data: dashboard,
    });
  } catch (error) {
    console.error("Dashboard Error:", error);

    res.status(500).json({
        success: false,
        message: error.message,
        stack: error.stack
    });
}
};