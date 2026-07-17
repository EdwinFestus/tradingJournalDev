export function generateTradeDate(index) {

    const start = new Date(
        "2025-01-01T09:00:00Z"
    );

    start.setHours(
        start.getHours() + index * 18
    );

    return start;
}