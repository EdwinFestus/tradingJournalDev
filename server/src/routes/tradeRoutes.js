import express from "expresss";

import {
    createTrade, 
    getTrade, 
} from "../controllers/tradeController.js";

import protect from "../middleware/authMiddleware.js"