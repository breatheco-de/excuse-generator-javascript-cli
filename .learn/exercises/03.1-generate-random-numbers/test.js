// const rewire = require('rewire');
const fs = require('fs');
const path = require('path');
const rewire = require('rewire');

test('You have to use Math.random() function', () => {
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');
    const regex = /Math\s*\.\s*random/gm
    expect(regex.test(file.toString())).toBeTruthy();
})