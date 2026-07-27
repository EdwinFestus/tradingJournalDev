import mongoose from "mongoose";
import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";

import User from "../src/models/User.js";
import Trade from "../src/models/Trade.js";

import {
    calculateTradeMetrics,
} from "../src/utils/tradeCalculator.js";

dotenv.config();

async function seedTrades() {
    try {
        console.log("Connecting to MongoDB...");

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected");

        const user = await User.findOne({
            email: process.env.SEED_EMAIL,
        });

        if (!user) {
            throw new Error(
                `Seed user "${process.env.SEED_EMAIL}" was not found.`
            );
        }

        const filePath = path.join(
            process.cwd(),
            "src",
            "data",
            "trades.json"
        );

        if (!fs.existsSync(filePath)) {
            throw new Error(
                `Trades file not found: ${filePath}`
            );
        }

        const trades = JSON.parse(
            fs.readFileSync(filePath, "utf8")
        );

        if (!Array.isArray(trades)) {
            throw new Error(
                "trades.json must contain an array."
            );
        }

        console.log(
            `Found ${trades.length} trade(s).`
        );

        await Trade.deleteMany({
            user: user._id,
        });

        console.log(
            "Existing seeded trades removed."
        );

        const tradesWithUser = trades.map(
            (trade, index) => {
                try {
                    const metrics =
                        calculateTradeMetrics(
                            trade.entry,
                            trade.stopLoss,
                            trade.takeProfit
                        );

                    return {
                        ...trade,
                        user: user._id,

                        riskAmount:
                            metrics.riskAmount,

                        rewardAmount:
                            metrics.rewardAmount,

                        rrRatio:
                            metrics.rrRatio,

                        /*
                         * Keep the setup rating from
                         * trades.json.
                         *
                         * Uncomment below if you ever
                         * want RR to determine it.
                         */

                        // setupRating:
                        //     metrics.setupRating,
                    };
                } catch (error) {
                    throw new Error(
                        `Trade #${index + 1} (${
                            trade.pair
                        }) failed validation.\n${error.message}`
                    );
                }
            }
        );

        const insertedTrades =
            await Trade.insertMany(
                tradesWithUser
            );

        console.log("");

        console.log(
            "======================================"
        );

        console.log(
            "Trade seeding completed successfully."
        );

        console.log(
            `Inserted: ${insertedTrades.length} trade(s).`
        );

        console.log(
            `User: ${user.email}`
        );

        console.log(
            "======================================"
        );
    } catch (error) {
        console.error("");

        console.error(
            "Trade seeding failed."
        );

        console.error(error.message);

        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();

        console.log("MongoDB Disconnected");
    }
}

seedTrades();