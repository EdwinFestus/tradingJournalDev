import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js"

dotenv.config();
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

const PORT = process.env.PORT || 5000;


app.listen( PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})