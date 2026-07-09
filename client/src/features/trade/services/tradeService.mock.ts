import tradeRepository from "../../../shared/mock/repositories/trade.repository";

class TradeService {

    async getTrades() {
        return tradeRepository.findAll();
    }

}

export default new TradeService();