import type { Trade } from "../../trade/types/trade";

/* -------------------------------------------------------------------------- */
/*                                  API Root                                  */
/* -------------------------------------------------------------------------- */

export interface DashboardApiResponse {
    success: boolean;
    data: DashboardData;
}

export interface DashboardData {
    analytics: DashboardAnalytics;
    recentTrades: Trade[];
    charts: DashboardCharts;
    portfolio: PortfolioSummary;
    streak: TradingStreak;
    insights: DashboardInsight[];
}


export interface Insight {
    title: string;
    description: string;
}

export interface Streak {
    current: number;
    best: number;
}



/* -------------------------------------------------------------------------- */
/*                                 Analytics                                  */
/* -------------------------------------------------------------------------- */

export interface DashboardAnalytics {
    overview: DashboardOverview;
    performance: PerformanceAnalytics;
    strategy: Record<string, StrategyAnalytics>;
    pairs: PairAnalytics[];
    risk: RiskAnalytics;
    psychology: PsychologyAnalytics[];
    sessions: SessionAnalytics[];
    calendar: CalendarAnalytics[];
    trade: TradeAnalytics;
}

/* -------------------------------------------------------------------------- */
/*                                  Overview                                  */
/* -------------------------------------------------------------------------- */

export interface DashboardOverview {
    totalTrades: number;
    openTrades: number;
    closedTrades: number;

    winningTrades: number;
    losingTrades: number;
    breakEvenTrades: number;

    winRate: number;

    totalProfit: number;
    totalLoss: number;
    netProfit: number;

    averageRR: number;
}


export interface Overview {
    totalTrades: number;
    openTrades: number;
    closedTrades: number;
    winningTrades: number;
    losingTrades: number;
    breakEvenTrades: number;
    winRate: number;
    totalProfit: number;
    totalLoss: number;
    netProfit: number;
    averageRR: number;
}

/* -------------------------------------------------------------------------- */
/*                               Performance                                  */
/* -------------------------------------------------------------------------- */

export interface PerformanceAnalytics {
    averageWin: number;
    averageLoss: number;

    largestWin: number;
    largestLoss: number;

    averageRR: number;
}

/* -------------------------------------------------------------------------- */
/*                                 Strategy                                   */
/* -------------------------------------------------------------------------- */

export interface StrategyAnalytics {
    trades: number;
    wins: number;
    losses: number;

    profit: number;

    winRate: number;
}

/* -------------------------------------------------------------------------- */
/*                                   Pairs                                    */
/* -------------------------------------------------------------------------- */

export interface PairAnalytics {
    pair: string;

    totalTrades: number;
    closedTrades: number;

    wins: number;
    losses: number;
    breakEvens: number;

    pnl: number;

    winRate: number;
}

/* -------------------------------------------------------------------------- */
/*                                    Risk                                    */
/* -------------------------------------------------------------------------- */

export interface RiskAnalytics {
    averageRisk: number;
    averageReward: number;
    averageRR: number;

    totalRisk: number;
    totalReward: number;
}

/* -------------------------------------------------------------------------- */
/*                                Psychology                                  */
/* -------------------------------------------------------------------------- */

export interface PsychologyAnalytics {
    mood: string;

    trades: number;

    wins: number;
    losses: number;
    breakEvens: number;

    pnl: number;

    winRate: number;
}

/* -------------------------------------------------------------------------- */
/*                                 Sessions                                   */
/* -------------------------------------------------------------------------- */

export interface SessionAnalytics {
    session: string;

    trades: number;

    wins: number;
    losses: number;
    breakEvens: number;

    pnl: number;

    winRate: number;
}

/* -------------------------------------------------------------------------- */
/*                                 Calendar                                   */
/* -------------------------------------------------------------------------- */

export interface CalendarAnalytics {
    date: string;

    totalTrades: number;

    wins: number;
    losses: number;
    breakEvens: number;

    pnl: number;

    winRate: number;
}

/* -------------------------------------------------------------------------- */
/*                              Trade Summary                                 */
/* -------------------------------------------------------------------------- */

export interface TradeAnalytics {
    totalTrades: number;

    winRate: number;

    averageProfitLoss: number;
}

/* -------------------------------------------------------------------------- */
/*                                   Charts                                   */
/* -------------------------------------------------------------------------- */

export interface DashboardCharts {
    equityCurve: EquityPoint[];
    monthlyPnL: MonthlyPnLPoint[];
    winRateTrend: WinRatePoint[];
}

export interface EquityPoint {
    date: string;
    equity: number;
}

export interface MonthlyPnLPoint {
    month: string;
    pnl: number;
}

export interface WinRatePoint {
    trade: number;
    winRate: number;
}

/* -------------------------------------------------------------------------- */
/*                                 Portfolio                                  */
/* -------------------------------------------------------------------------- */

export interface PortfolioSummary {
    balance: number;
    equity: number;
    netProfit: number;
}

/* -------------------------------------------------------------------------- */
/*                                   Streak                                   */
/* -------------------------------------------------------------------------- */

export interface TradingStreak {
    current: number;
    best: number;
}

/* -------------------------------------------------------------------------- */
/*                                  Insights                                  */
/* -------------------------------------------------------------------------- */

export interface DashboardInsight {
    title: string;
    description: string;
}