export const getRiskAnalytics = async (req, res) => {
  try {
    const { userId } = req.params;      
    const riskAnalytics = await RiskAnalytics.findOne({ userId });
    if (!riskAnalytics) {
      return res.status(404).json({ message: 'Risk analytics not found' });
    }
    res.json(riskAnalytics);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching risk analytics', error });
  }
};