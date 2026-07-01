import api from "../../../shared/lib/api";

import type {
  DashboardApiResponse,
} from "../types/dashboard.types";

export async function getDashboard() {
  const { data } = await api.get<DashboardApiResponse>(
    "/dashboard"
  );

  return data.data;
}