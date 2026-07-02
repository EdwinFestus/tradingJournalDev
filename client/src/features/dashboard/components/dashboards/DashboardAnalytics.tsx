import DashboardOverview from "./DashboardOverview";
import PerformanceAnalytics from "./PerformanceAnalytics";
import StrategyAnalytics from "./StrategyAnalytics";
import PairAnalytics from "./PairAnalytics";

export interface DashboardAnalytics {

    overview: DashboardOverview;

    performance: PerformanceAnalytics;

    strategy: StrategyAnalytics;

    pairs: PairAnalytics;

}