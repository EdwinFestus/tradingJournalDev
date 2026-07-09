import api from "../../../shared/api/api";


import type {
    DashboardApiResponse,
    DashboardData,
} from "../types/dashboard.types";

class DashboardService {

    async getDashboard(): Promise<DashboardData> {

        const { data } =
            await api.get<DashboardApiResponse>(
                "/dashboard"
            );

        return data.data;
    }

    async refreshDashboard(): Promise<DashboardData> {

        const { data } =
            await api.get<DashboardApiResponse>(
                "/dashboard"
            );

        return data.data;
    }

}

export default new DashboardService();