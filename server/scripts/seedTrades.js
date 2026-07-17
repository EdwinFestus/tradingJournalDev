import mongoose from "mongoose";
import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";

import User from "../src/models/User.js";
import Trade from "../src/models/Trade.js";

dotenv.config();



async function seedTrades() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Mongo Connected");

        const user = await User.findOne({
             email: process.env.SEED_EMAIL,
        });

        if (!user) {
            throw new Error(
                `User ${process.env.SEED_EMAIL} not found.`
            );
        }

        // console.log(`Using user: ${user.email}`);

        const filePath = path.join(
            process.cwd(),
            "src",
            "data",
            "trades.json"
        );

        const trades = JSON.parse(
            fs.readFileSync(filePath, "utf8")
        );

        await Trade.deleteMany({
            user: user._id,
        });

        const tradesWithUser = trades.map((trade) => ({
            ...trade,
            user: user._id,
        }));

        await Trade.insertMany(tradesWithUser);

        console.log(
            `${tradesWithUser.length} trades inserted successfully.`
        );

        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

seedTrades();