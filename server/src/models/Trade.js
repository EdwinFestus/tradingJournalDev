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

    strategy: {
        type: String,
        default: "",
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

    setupRating: {
        type: String,
        default: 0,
    },
    
    outcome: {
        type: String,
        enum: ["WIN", "LOSS", "BE", "OPEN"],
        default: "OPEN",
    },

},
    {
        timestamps: true,
    }
)

const Trade = mongoose.model("Trade", tradeSchema);

export default Trade;