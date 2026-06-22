import express from "express";
import protect  from "../middleware/authMiddleware.js"


import {
    createTrade, 
    getTrades,
    deleteTrade, 
    updateTrade, 
} from "../controllers/tradeController.js";


const router = express.Router()
router.post(
    "/", 
    protect, 
    createTrade
);

router.get(
    "/", 
    protect, 
    getTrades
);

router.patch(  
    "/:id",
    protect,
    updateTrade
);

router.dalete(  
    "/:id",
    protect,
    deleteTrade
);


export default router;