import Trade from "../models/Trade.js";

const calculateRR = (
    entry,
    stopLoss,
    takeProfit
) => {
    const risk = Math.abs(entry-stopLoss);

    const reward = Math.abs (
        takeProfit - entry
    );


    const rr = reward / risk;

    let rating = "B";

    if (rr >= 3 ) rating = "A+";
    if (rr >= 5 ) rating = "A++";
    if (rr > 5 ) rating = "ELITE";

    return {
        risk,
        reward,
        rr,
        rating,
    };

}

export const createTrade = async (req, res) => {
  try {
    const { 
        pair, 
        orderType, 
        entry, 
        stopLoss, 
        takeProfit,
        lotSize,
        strategy,
        marketCondition,
        mood,
        tradingStyle,
         } = req.body;

    const calc = calculateRR(
        entry, 
        stopLoss,
        takeProfit,
    )


    const trade = await Trade.create({
      user: req.user._id,
      pair,
      orderType,
      entry,
      stopLoss,
      takeProfit,
      lotSize,

      strategy,
      marketCondition,
      mood,
      tradingStyle,

      riskAmount: calc.risk,
      rewardAmount: calc.reward,
      rrRatio: calc.rr,
      setupRating: calc.rating,
    });

    res.status(201).json(trade);
  } catch (err) {
    res.status(500).json({
        message: err.message,
    })
  }
};


export const getTrades = async ( req, res ) => {
    try{
        const trades = await Trade.find({
            user: req.user._id,
        }).sort("-createdAt");

        return res.status(200).json(trades);

    } catch (err) {
        res.status(500).json({
            massage: err.message,
        });
    };
};

