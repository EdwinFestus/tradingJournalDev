export function getClosedTrades(trades) {
    return trades.filter(trade => trade.status === "CLOSED");
}

export function getWinningTrades(trades) {
    return trades.filter(trade => trade.outcome === "WIN");
}

export function getLosingTrades(trades) {
    return trades.filter(trade => trade.outcome === "LOSS");
}

export function getBreakEvenTrades(trades) {
    return trades.filter(trade => trade.outcome === "BE");
}

export function sum(trades, field) {
    return trades.reduce(
        (total, trade) => total + (trade[field] ?? 0),
        0
    );
}

export function average(trades, field) {
    if (!trades.length) return 0;

    return (
        trades.reduce(
            (total, trade) => total + (trade[field] ?? 0),
            0
        ) / trades.length
    );
}

export function groupBy(trades, key) {
    return trades.reduce((groups, trade) => {
        const value = trade[key] ?? "Unknown";

        if (!groups[value]) {
            groups[value] = [];
        }

        groups[value].push(trade);

        return groups;
    }, {});
}