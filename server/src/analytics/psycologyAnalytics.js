export const getPsychologyAnalytics = async (req, res) => {
  try {
    const { userId } = req.params;      
    const psychologyAnalytics = await PsychologyAnalytics.findOne({ userId });
    if (!psychologyAnalytics) {
      return res.status(404).json({ message: 'Psychology analytics not found' });
    }
    res.json(psychologyAnalytics);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching psychology analytics', error });
  }
};