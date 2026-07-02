import { findAllByUser } from "../repositories/tradeRepository.js";
import { buildDashboard } from "../dashboard/dashboardBuilder.js";

export async function getDashboard(userId) {
    const trades = await findAllByUser(userId);

    return await buildDashboard(trades);
}