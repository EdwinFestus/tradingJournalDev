export const getSessionAnalytics = async (sessionId) => {
  try {
    const sessionAnalytics = await SessionAnalytics.findOne({ sessionId });
    return sessionAnalytics;
  } catch (error) {
    throw new Error('Error fetching session analytics');
  }
};