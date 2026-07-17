import {
    chance,
    randomNumber,
} from "../utils/random.js";

export function generatePrices(
    orderType
) {

    const entry =
        randomNumber(1000, 5000);

    const risk =
        randomNumber(5, 80);

    const reward =
        risk *
        randomNumber(1.5, 5);

    let stopLoss;
    let takeProfit;

    if (orderType === "BUY") {

        stopLoss = entry - risk;

        takeProfit = entry + reward;

    } else {

        stopLoss = entry + risk;

        takeProfit = entry - reward;

    }

    return {

        entry,

        stopLoss,

        takeProfit,

    };

}