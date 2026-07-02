export const getCalendarAnalytics = async (userId) => {
  try {
    const calendarAnalytics = await CalendarAnalytics.findOne({ userId });
    return calendarAnalytics;
  } catch (error) {
    throw new Error('Error fetching calendar analytics');
  }
};