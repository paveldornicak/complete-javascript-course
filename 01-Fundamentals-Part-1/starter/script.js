// Coding Challenge #1

let markWeight = 78;
let johnWeight = 92;

let markHeight = 1.69;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;


console.log(markBMI, johnBMI);

// Coding Challenge #2

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}

// 
const firstName = "Pavel";
const job = "student"
const birth = 1993;
const year = 2020;

const infoPavel = `I'm ${firstName}, a ${year - birth} years old ${job}!`;
console.log(infoPavel);

