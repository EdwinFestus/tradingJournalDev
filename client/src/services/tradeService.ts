import api from "../lib/api";

export const getTrades = async () => {
  const { data } = await api.get("/trades");
  return data;
};

export const getTradeById = async (
  id: string
) => {
  const { data } = await api.get(
    `/trades/${id}`
  );

  return data;
};

export const createTrade = async (
  tradeData: Record<string, unknown>
) => {
  const { data } = await api.post(
    "/trades",
    tradeData
  );

  return data;
};

export const updateTrade = async (
  id: string,
  tradeData: Record<string, unknown>
) => {
  const { data } = await api.patch(
    `/trades/${id}`,
    tradeData
  );

  return data;
};

export const deleteTrade = async (
  id: string
) => {
  const { data } = await api.delete(
    `/trades/${id}`
  );

  return data;
};