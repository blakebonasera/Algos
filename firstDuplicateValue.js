// First Duplicate Value
//O(n^2) Time | O(1) Space - where n is the length of the input array

function firstDuplicateValue(array) {
    let minimumSecondIndex = array.length;
    for (let i = 0; i < array.length - 1; i++) {
        const value = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const valueToCompare = array[j];
            if (value === valueToCompare) {
                minimumSecondIndex = Math.min(minimumSecondIndex, j);
            }
        }
    }
    if (minimumSecondIndex === array.length) return -1;
    return array[minimumSecondIndex];
}

// O(n) Time | O(n) Space - where n is the length of the input array

function firstDuplicateValue(array) {
    const seen = new Set();
    for (const value of array) {
        if (seen.has(value)) return value;
        seen.add(value);
    }
    return -1;
}

// O(n) Time | O(1) Space - where n is the length of the input array

function firstDuplicateValue(array) {
    for (const value of array) {
        const absValue = Math.abs(value);
        if (array[absValue - 1] < 0) return absValue;
        array[absValue - 1] *= -1;
    }
    return -1;
}
