import { useCallback, useEffect, useState } from "react";

import DashboardService from "../services/dashboardService";

import type {
    DashboardData,
} from "../types/dashboard.types";

export function useDashboard() {

    const [dashboard, setDashboard] =
        useState<DashboardData | null>(null);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState<string | null>(null);

    const fetchDashboard = useCallback(async () => {

        try {

            setLoading(true);

            setError(null);

            const response =
                await DashboardService.getDashboard();

            setDashboard(response);

        } catch (error) {

            console.error(error);

            setError("Failed to load dashboard.");

        } finally {

            setLoading(false);

        }

    }, []);

    useEffect(() => {

        fetchDashboard();

    }, [fetchDashboard]);

    return {

        dashboard,

        loading,

        error,

        refresh: fetchDashboard,

    };

}