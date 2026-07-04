import type { Trade } from "../../../shared/types/trade";


export interface PortfolioSummary {
  totalTrades: number;
  winningTrades: number;
  losingTrades: number;
  openTrades: number;
  breakevenTrades: number;
}

export interface Analytics {
  totalTrades: number;
  wins: number;
  losses: number;
  winRate: number;
  grossProfit: number;
  grossLoss: number;
  netProfit: number;
  averageRR: number;
  profitFactor: number;
}

export interface MonthlyPnL {
  month: string;
  profit: number;
}

export interface EquityPoint {
  date: string;
  equity: number;
}

export interface StrategyDistribution {
  strategy: string;
  total: number;
}

export interface TimeframeDistribution {
  timeframe: string;
  total: number;
}

export interface Streak {
  type: string;
  count: number;
}

export interface Insight {
  type: "success" | "warning" | "info";
  title: string;
  description: string;
}

export interface DashboardCharts {
  monthlyPnL: MonthlyPnL[];
  equityCurve: EquityPoint[];
  strategyDistribution: StrategyDistribution[];
  timeframeDistribution: TimeframeDistribution[];
}

export  interface  DashboardResponse {
  portfolio: PortfolioSummary;
  analytics: Analytics;
  charts: DashboardCharts;
  recentTrades: Trade[];
  streak: Streak;
  insights: Insight[];
  drawdown: number;
}

export interface DashboardApiResponse {
  success: boolean;
  data: DashboardResponse;
}


export interface DashboardOverview {
  totalTrades: number;
  closedTrades: number;
  wins: number;
  losses: number;
  breakeven: number;
  winRate: number;
  netProfit: number;
  profitFactor: number;
}

export interface PerformanceAnalytics {
  averageRR: number;
  averageWin: number;
  averageLoss: number;
  expectancy: number;
  profitFactor: number;
}

export interface PairAnalytics {  
  pair: string;
  totalTrades: number;
  wins: number;
  losses: number;
  winRate: number;
  grossProfit: number;
  grossLoss: number;
  netProfit: number;
  averageRR: number;
  profitFactor: number;
}

export interface StrategyAnalytics {
  strategyDistribution: StrategyDistribution[];
  timeframeDistribution: TimeframeDistribution[];
}

export interface DashboardAnalytics {
    overview: DashboardOverview;
    performance: PerformanceAnalytics;
    strategy: StrategyAnalytics;
    pairs: PairAnalytics;

}


export interface DashboardLoading {
  isLoading: boolean;
  
}
