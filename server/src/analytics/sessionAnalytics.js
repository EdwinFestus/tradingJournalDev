export function getSessionAnalytics( trades ) {

    const closedTrades = trades.filter(
        trade => trade.status === "CLOSED"
    );

    const grouped = {} ;

    for (const trade of closedTrades ) {
      const session = trade.tag || "Unknown";

      if (!grouped[session]) {
        grouped[session] = {
          session: session,
          trades: 0,
          wins: 0,
          losses: 0,
          breakEvens: 0,
          pnl: 0,
          winRate: 0,
        };
    }

    const item = grouped[session];

    item.trades++;

    if(trade.outcome === "WIN") item.wins++;
    if(trade.outcome === "LOSS") item.losses++;
    if(trade.outcome === "BE") item.breakEven++;

    item.pnl += trade.profitLoss ?? 0;
  }

    for ( const item of Object.values(grouped)) {
      item.winRate = 
        item.trades > 0
            ? (item.wins / item.trades) * 100
            : 0;
    }

    return Object.values(grouped)
  }
