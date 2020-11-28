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

// Coding Challenge #3
const mark = {
    firstName: 'Mark',
    secondName: 'Miller',
    height: 1.69,
    mass: 78,
    calcBMI: function () {
        return this.BMI = this.mass / (this.height ** 2);
    }
};
const john = {
    firstName: 'John',
    secondName: 'Smith',
    height: 1.95,
    mass: 92,
    calcBMI: function () {
        return this.BMI = this.mass / (this.height ** 2);
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
    console.log(`${mark.firstName + mark.secondName}'s BMI ${mark.BMI} is higher than${john.firstName + john.secondName}'s BMI ${john.BMI} .`)
} else {
    console.log(`${john.firstName + john.secondName}'s BMI ${john.BMI} is higher than${mark.firstName + mark.secondName}'s BMI ${mark.BMI} .`)
}