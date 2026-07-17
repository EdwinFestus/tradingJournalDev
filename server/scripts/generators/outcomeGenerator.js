export function generateOutcome() {

    const roll = Math.random();

    if (roll <= 0.67) return "WIN";

    if (roll <= 0.97) return "LOSS";

    return "BE";

}