tradeSchema.pre("save", function (next) {
    const {
        riskAmount,
        rewardAmount,
        rrRatio,
    } = calculateRiskReward({
        entry: this.entry,
        stopLoss: this.stopLoss,
        takeProfit: this.takeProfit,
    });

    this.riskAmount = riskAmount;
    this.rewardAmount = rewardAmount;
    this.rrRatio = rrRatio;

    next();
});