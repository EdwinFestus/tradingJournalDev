import type { Trade } from "../../../shared/types/trade";

export function winRateTrend(
    trades: Trade[]
) {

    const months: Record<
        string,
        {
            wins:number;
            total:number;
        }
    > = {};

    trades.forEach(trade => {

        const month =
            new Date(
                trade.createdAt
            ).toLocaleString(
                "default",
                {
                    month:"short"
                }
            );

        if(!months[month]){

            months[month]={
                wins:0,
                total:0
            };

        }

        months[month].total++;

        if(trade.outcome === "WIN") {

            months[month].wins++;

        }

    });

    return Object.entries(months).map(
        ([month,data])=>({

            month,

            rate:
                (data.wins /
                    data.total) *
                100

        })
    );

}