import { useEffect, useState } from "react";
import axios from "axios";

import * as dashboardService from "../services/dashboardService";

import type { DashboardResponse } from "../types/dashboard.types";

export default function useDashboard() {
  const [dashboard, setDashboard] =
    useState<DashboardResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setLoading(true);

        const data =
          await dashboardService.getDashboard();

        setDashboard(data);

        setError(null);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setError(
            error.response?.data?.message ??
              "Failed to load dashboard."
          );
        } else {
          setError("Failed to load dashboard.");
        }
      } finally {
        setLoading(false);
      }
    };

    void loadDashboard();
  }, []);

  return {
    dashboard,

    portfolio: dashboard?.portfolio,

    analytics: dashboard?.analytics,

    charts: dashboard?.charts,

    recentTrades:
      dashboard?.recentTrades ?? [],

    streak:
      dashboard?.streak,

    insights:
      dashboard?.insights ?? [],

    drawdown:
      dashboard?.drawdown ?? 0,

    loading,

    error,
  };
}