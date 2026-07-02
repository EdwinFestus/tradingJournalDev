export const getStrategyAnalytics = async (strategyId) => {
  try {
    const strategyAnalytics = await StrategyAnalytics.findOne({ strategyId });
    return strategyAnalytics;
  } catch (error) {
    throw new Error('Error fetching strategy analytics');
  }
};