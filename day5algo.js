// Minimum Waiting Time Javascript

const queries = [2, 1, 1, 1]
function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b);

    let totalWaitingTime = 0;
    for (let i = 0; i < queries.length; i++) {
        const duration = queries[i];
        const queriesLeft = queries.length - (i + 1);
        totalWaitingTime += duration * queriesLeft;
    }

    return totalWaitingTime;
}
console.log(minimumWaitingTime(queries));