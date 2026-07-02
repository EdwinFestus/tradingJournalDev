export const getPairAnalytics = async (pairId) => {
  try {
    const pairAnalytics = await PairAnalytics.findOne({ pairId });
    return pairAnalytics;
  } catch (error) {
    throw new Error('Error fetching pair analytics');
  }
};