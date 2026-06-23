import mongoose from "mongoose";


const tradeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    pair: {
        type: String,
        required: true,
        trim: true,
    },

    orderType: {
        type: String,
        enum: ["BUY", "SELL"],
        required: true,
    },

    entry: {
        type: Number,
        required: true,
    },

    stopLoss: {
        type: Number, 
        required: true,
    },

    takeProfit: {
        type: Number,
        required: true,
    },

    lotSize: {
        type: Number,
        required: true
    },

    accountType: {
        type: String,
        enum: [
            "Personal",
            "Challenge",
            "Funded",
            "Demo",
        ],
        default: "Personal",
    },

    strategy: {
        type: String,
        enum: [
            "SMC",
            "Liquidity Grab",
            "Trendline Break",
            "Double Top",
            "Double Bottom",
            "Head & Shoulders",
            "Expansion",
            "Other",
        ],
        default: "Other",
    },

    marketCondition: {
        type: String,
        default: "",
    },

    mood: {
        type: String,
        default: "",
    },

    tradingStyle: {
        type: String,
        enum: ["Conservative", "Aggressive"],
        default: "Conservative",
    },

    riskAmount: {
        type: Number,
        default: 0,
    },

    rewardAmount: {
        type: Number,
        default: 0,
    },
    
    rrRatio: {
        type: Number,
        default: 0,
    },

    timeframe: {
        type: String,
        enum: [
            "1M",
            "5M",
            "15M",
            "30M",
            "1H",
            "4H",
            "1D",
        ],
    },

    tradeDate: {
        type: Date,
        required: true,
        default: Date.now,
    },

   setupRating: {
        type: String,
        enum: ["STANDARD", "A+", "A++", "ELITE"],
        default: "STANDARD",
    },

    notes: {
        type: String,
        default: "",
    },

    tag: {
        type: String,
    },

    exitPrice: {
        type: Number,
        default: 0,
    },

    profitLoss: {
        type: Number,
        default: 0,
    },

    beforeImage: {
        type: String,
        default: "",
    },

    afterImage: {
        type: String,
        default: "",
    },
    
    outcome: {
        type: String,
        enum: ["WIN", "LOSS", "BE", "OPEN", "MANUAL_CLOSE"],
        default: "OPEN",
    },

},
    {
        timestamps: true,
    }
)

const Trade = mongoose.model("Trade", tradeSchema);

export default Trade;