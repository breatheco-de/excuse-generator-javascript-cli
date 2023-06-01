// const rewire = require('rewire');
const fs = require('fs');
const path = require('path');
const rewire = require('rewire');

test('You have to use Math.random(), Math.floor(), and generate a number between 0 and 4', () => {
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');

    const floorRegex = /Math\s*\.\s*floor\s*\(\s*.*Math\s*\.\s*random\s*\(\s*\)\s*.*\)/gm;

    expect(floorRegex.test(file.toString())).toBeTruthy();
})


let buffer = "";
global.console.log = jest.fn((text) => buffer += text + "\n");

test('You have to call console.log() with a random integer between 0 and 4', () => {
    require("../../../app.js");

    const loggedValue = parseInt(buffer.trim());

    // Check if logged value is a number between 0 and 4
    let isBetweenZeroAndFour = loggedValue >= 0 && loggedValue <= 4;

    // Check if the value is an integer
    let isInteger = Number.isInteger(loggedValue);

    expect(isBetweenZeroAndFour).toBe(true);
    expect(isInteger).toBe(true);
})