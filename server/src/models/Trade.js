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

    outcome: {
        type: String,
        enum: ["WIN", "LOSS", "BE"],
        default: "BE",
    },

    rr: {
        type: Number,
        default: 0,
    },
},
    {
        timestamps: true,
    }
)

export default mongoose.model("Trade", tradeSchema);