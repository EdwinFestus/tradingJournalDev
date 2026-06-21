import dotenv from "dotenv";
dotenv.config();

console.log("PORT=", process.env.PORT );
console.log("MONGO_URI", process.env.MONGO_URI );
console.log("JWT_SECRET=", process.env.JWT_SECRET );

import express from "express";
import cors from "cors";

import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js"
import tradeRoutes from "./src/routes/tradeRoutes.js"

connectDB();
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));



app.use(cors());

app.get("/", (req, res) => {
    res.send("Trading Journal API Running");
})

app.use(
    "/api/auth",
    authRoutes
);

app.use(
    "/api/trades",
    tradeRoutes
)

const PORT = process.env.PORT || 5000;


app.listen( PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})