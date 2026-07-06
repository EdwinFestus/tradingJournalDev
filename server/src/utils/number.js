/**
 * Rounds a number to the specified decimal places.
 *
//  * @param {number} value
//  * @param {number} decimals
//  * @returns {number}
 */

export function roundTo(value, decimals = 2) {
    return Number(Number(value).toFixed(decimals));
}