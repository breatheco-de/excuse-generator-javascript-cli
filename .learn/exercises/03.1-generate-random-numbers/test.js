
const fs = require('fs');
const path = require('path');
const rewire = require('rewire');

test('You have to use Math.random() function', () => {
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');
    const regex = /Math\s*\.\s*random/gm
    expect(regex.test(file.toString())).toBeTruthy();
})

let buffer = "";
global.console.log = jest.fn((text) => buffer += text + "\n");

test('You have to call console.log() with a random number', () => {
    require("../../../app.js");

    const loggedValue = parseFloat(buffer.trim());

    // check if logged value is a number between 0 and 1
    let isBetweenZeroAndOne = loggedValue >= 0 && loggedValue < 1;

    expect(isBetweenZeroAndOne).toBe(true);
})