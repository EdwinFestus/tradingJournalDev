    import mongoose from "mongoose";
    import {
    ORDER_TYPES,
    TIMEFRAMES,
    STRATEGIES,
} from "../constants/tradeConstants.js";


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


        orderType: {
            type: String,
            enum: ORDER_TYPES,
            required: true,
        },

        strategy: {
            type: String,
            enum: STRATEGIES,
            required: true,
        },

        timeframe: {
            type: String,
            enum: TIMEFRAMES,
            required: true,
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

        deletedAt: {
            type: Date,
        },

        isDeleted: {
            type: Boolean,
            default: false,
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
        
        status: {
            type: String,
            enum: ["OPEN", "CLOSED", "ARCHIVED"],
            default: "OPEN",
        },

        outcome: {
            type: String,
            enum: ["WIN", "LOSS", "BE", "MANUAL_CLOSE"],
            default: null,
        },

        isPartialClose:{

            type:Boolean,

            default:false

        },

        session:{

                type:String,

                enum:[

                "ASIAN",

                "LONDON",

                "NEW_YORK",

                "OVERLAP"

                ]

                },


        source:{

            type:String,

            enum:[

            "MANUAL",

            "MT5",

            "BYBIT",

            "BINANCE"

            ],

            default:"MANUAL"

            },

            commission:{

                    type:Number,

                    default:0

                    },

                    swap:{

                    type:Number,

                    default:0

                    },

        exitReason: {
                type: String,
                enum: [
                    "TAKE_PROFIT",
                    "STOP_LOSS",
                    "MANUAL",
                    "TIME_EXIT",
                    "TRAILING_STOP",
                ],
            },

        closedAt: {
            type: Date,
        },

        holdingTimeMinutes: {
            type: Number,
            default: 0,
        },
    },
        {
            timestamps: true,

            toJSON: {
                virtuals: true,
            },

            toObject: {
                virtuals: true,
            },

            optimisticConcurrency: true,
                    
        }
    )



tradeSchema.index({ user: 1 });

tradeSchema.index({ user: 1, status: 1 });

tradeSchema.index({ user: 1, tradeDate: -1 });

tradeSchema.index({ user: 1, strategy: 1 });

tradeSchema.index({ user: 1, pair: 1 });

tradeSchema.index({ outcome: 1 });

tradeSchema.index({ isDeleted: 1 });


tradeSchema.virtual("isClosed").get(function () {
    return this.status === "CLOSED";
});


tradeSchema.pre("validate", function () {
    if (this.orderType === "BUY") {
        if (this.stopLoss >= this.entry) {
            throw new Error("BUY trades require stopLoss below entry.");
        }

        if (this.takeProfit <= this.entry) {
            throw new Error("BUY trades require takeProfit above entry.");
        }
    }

    if (this.orderType === "SELL") {
        if (this.stopLoss <= this.entry) {
            throw new Error("SELL trades require stopLoss above entry.");
        }

        if (this.takeProfit >= this.entry) {
            throw new Error("SELL trades require takeProfit below entry.");
        }
    }
});



tradeSchema.pre("save", function () {
    const risk = Math.abs(this.entry - this.stopLoss);
    const reward = Math.abs(this.takeProfit - this.entry);

    this.riskAmount = risk;
    this.rewardAmount = reward;
    this.rrRatio =
        risk === 0 ? 0 : Number((reward / risk).toFixed(2));
});




    const Trade = mongoose.model("Trade", tradeSchema);

    export default Trade;