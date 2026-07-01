import Trade from "../models/Trade.js";

/**
 * Calculate Risk Reward Ratio
 */
const calculateRR = (entry, stopLoss, takeProfit) => {
  const risk = Math.abs(entry - stopLoss);

  if (risk === 0) {
    throw new Error("Entry and Stop Loss cannot be the same");
  }

  const reward = Math.abs(takeProfit - entry);

  const rr = Number((reward / risk).toFixed(2));

  let rating = "STANDARD";

  if (rr >= 6) {
    rating = "ELITE";
  } else if (rr >= 5) {
    rating = "A++";
  } else if (rr >= 3) {
    rating = "A+";
  }

  return {
    risk,
    reward,
    rr,
    rating,
  };
};

/**
 * Create Trade
 */
export const createTrade = async (req, res) => {
  try {
    const {
      pair,
      orderType,
      entry,
      stopLoss,
      takeProfit,
      lotSize,
      accountType,
      strategy,
      marketCondition,
      mood,
      tradingStyle,
      timeframe,
      tradeDate,
      notes,
      tag,
    } = req.body;

    const calc = calculateRR(
      Number(entry),
      Number(stopLoss),
      Number(takeProfit)
    );

    const trade = await Trade.create({
      user: req.user._id,

      pair,
      orderType,

      entry,
      stopLoss,
      takeProfit,

      lotSize,

      accountType,

      strategy,
      marketCondition,
      mood,
      tradingStyle,

      timeframe,
      tradeDate,

      notes,
      tag,

      riskAmount: calc.risk,
      rewardAmount: calc.reward,
      rrRatio: calc.rr,
      setupRating: calc.rating,
    });

    res.status(201).json(trade);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

/**
 * Get All User Trades
 */
export const getTrades = async (req, res) => {
  try {
    const trades = await Trade.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json(trades);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

/**
 * Get Single Trade
 */
export const getTradeById = async (req, res) => {
  try {
    const trade = await Trade.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!trade) {
      return res.status(404).json({
        message: "Trade not found",
      });
    }

    res.status(200).json(trade);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

/**
 * Update Trade
 */
export const updateTrade = async (req, res) => {
  try {
    const trade = await Trade.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!trade) {
      return res.status(404).json({
        message: "Trade not found",
      });
    }

    const updatedData = {
      ...req.body,
    };

    if (
      updatedData.entry &&
      updatedData.stopLoss &&
      updatedData.takeProfit
    ) {
      const calc = calculateRR(
        Number(updatedData.entry),
        Number(updatedData.stopLoss),
        Number(updatedData.takeProfit)
      );

      updatedData.riskAmount = calc.risk;
      updatedData.rewardAmount = calc.reward;
      updatedData.rrRatio = calc.rr;
      updatedData.setupRating = calc.rating;
    }

    const updatedTrade = await Trade.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user._id,
      },
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json(updatedTrade);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const closeTrade = async (req, res) => {
  try {
    const trade = await Trade.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!trade) {
      return res.status(404).json({
        message: "Trade not found",
      });
    }

    const {
      exitPrice,
      commission = 0,
      slippage = 0,
    } = req.body;

    const exit = Number(exitPrice);

    let pnl = 0;

    if (trade.orderType === "BUY") {
      pnl =
        (exit - trade.entry) *
        trade.lotSize;
    } else {
      pnl =
        (trade.entry - exit) *
        trade.lotSize;
    }

    pnl -= commission;
    pnl -= slippage;

    trade.exitPrice = exit;

    trade.profitLoss =
      Number(pnl.toFixed(2));

    if (pnl > 0)
      trade.outcome = "WIN";
    else if (pnl < 0)
      trade.outcome = "LOSS";
    else
      trade.outcome = "BE";

    await trade.save();

    res.json(trade);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};


/**
 * Delete Trade
 */
export const deleteTrade = async (req, res) => {
  try {
    const trade = await Trade.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!trade) {
      return res.status(404).json({
        message: "Trade not found",
      });
    }

    res.status(200).json({
      message: "Trade deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};