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

// Coding Challenge #2

const bills = [125, 555, 44];

const calcTip = function (value) {
    if (value >= 300 || value <= 50) {
        return value * 0.2;
    } else {
        return value * 0.15;
    }
}

const tips = [];
bills.forEach(function (e) {
    tips.push(calcTip(e));
});

console.log(tips);