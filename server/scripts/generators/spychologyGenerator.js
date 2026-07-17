import {
    randomItem,
} from "../utils/random.js";

const moods = [
    "Confident",
    "Calm",
    "Neutral",
    "Fear",
    "Greedy",
    "Frustrated",
    "Revenge",
    "FOMO",
];

export function generateMood() {
    return randomItem(moods);
}