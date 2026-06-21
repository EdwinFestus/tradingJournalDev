import Trade from "../models/Trade.js";

export const createTrade = async (req, res) => {
  try {
    const { pair, orderType, entry, stopLoss, takeProfit } = req.body;

    const risk = Math.abs(entry - stopLoss);
    const reward = Math.abs(takeProfit - entry);

    const rr = Number((reward / risk).toFixed(2));

    const trade = await Trade.create({
      user: req.user._id,
      pair,
      orderType,
      entry,
      stopLoss,
      takeProfit,
      rr,
    });

    res.status(201).json(trade);
  } catch (err) {
    res.status(500).json({
        message: error.message,
    })
  }
};


export const getTrades = async ( req, res ) => {
    try{
        const trades = await Trade.find({
            user: req.user._id,
        }).sort("-createdAt");

    } catch (err) {
        res.status(500).json({
            massage: err.message,
        });
    };
};