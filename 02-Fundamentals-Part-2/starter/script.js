// Coding Challenge #1

const calcAverage = (a, b, c) => (a + b + c) / 3;
const avgKoalas = calcAverage(200, 54, 49);
const avgDoplhins = calcAverage(44, 23, 71);

function checkWinner(avgKoalas, avgDolphins) {
    if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas won ${avgKoalas} vs ${avgDoplhins}`)
    } else if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Doplhins won ${avgDoplhins} vs ${avgKoalas}`)
    } else {
        console.log("No team wins");
    }
}
checkWinner(avgKoalas, avgDoplhins);