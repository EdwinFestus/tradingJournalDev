export function randomItem(array) {
    return array[
        Math.floor(Math.random() * array.length)
    ];
}

export function randomNumber(min, max) {
    return Number(
        (Math.random() * (max - min) + min)
            .toFixed(2)
    );
}

export function randomInteger(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
}

export function chance(percent) {
    return Math.random() * 100 < percent;
}