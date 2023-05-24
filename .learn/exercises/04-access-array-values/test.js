// const rewire = require('rewire');
const fs = require('fs');
const path = require('path');
const rewire = require('rewire');


test('You should not have to use Math.random() function in this specific exercise', () => {
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');
    const regex = /Math\s*\.\s*random/gm
    expect(regex.test(file.toString())).toBeFalsy();
})

test("You should have an array called developers with the indicated elements", ()=>{
    const file = rewire(path.resolve(__dirname, '../../../app.js'));
    const developers = file.__get__("developers")
    expect(developers).toBeTruthy()
    expect(developers).toEqual(["Karla", "Alex", "Joe", "Thomas"])
})

test("You should programmatically access the third element in the array developers and print it", ()=>{
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');
    const regex = /console\.log\s*\(\s*developers\s*\[\s*2\s*]\s*\)/gm
    expect(regex.test(file.toString())).toBeTruthy();
})