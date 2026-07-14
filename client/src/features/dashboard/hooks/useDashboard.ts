import { useEffect, useMemo, useState } from "react";

import DashboardService from "../services/dashboardService";

import type { DashboardData } from "../types/dashboard.types";

export function useDashboard() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const  loadDashboard =  async() => {
    try {
      setLoading(true);
      setError(null);

      const response = await DashboardService.getDashboard();

      setDashboard(response);
    } catch (err) {
      console.error(err);
      setError("Failed to load dashboard.");
    } finally {
      setLoading(false);
    }
  }

 useEffect(() => {
  void loadDashboard();
}, []);

  const data = useMemo(
    () => ({
      analytics: dashboard?.analytics ?? null,
      charts: dashboard?.charts ?? null,
      portfolio: dashboard?.portfolio ?? null,
      trades: dashboard?.recentTrades ?? [],
      insights: dashboard?.insights ?? [],
      streak: dashboard?.streak ?? null,
    }),
    [dashboard]
  );

  return {
    dashboard,
    ...data,

    loading,
    error,

    refresh: loadDashboard,
  };
}