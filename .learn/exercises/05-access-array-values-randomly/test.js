// const rewire = require('rewire');
const fs = require('fs');
const path = require('path');
const rewire = require('rewire');


test('You should use Math.random() function ', () => {
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');
    const regex = /Math\s*\.\s*random/gm
    expect(regex.test(file.toString())).toBeTruthy();
})

test('You should be using Math.floor(), Math.ceil, OR Math.round functions ', () => {
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');
    const regex_1 = /Math\s*\.\s*round/gm
    const regex_2 = /Math\s*\.\s*floor/gm
    const regex_3 = /Math\s*\.\s*ceil/gm

    let has_rounding = regex_1.test(file.toString()) || regex_2.test(file.toString()) || regex_3.test(file.toString())

    expect(has_rounding).toBeTruthy();
})

test("You should have an array called developers with the indicated elements", ()=>{
    const file = rewire(path.resolve(__dirname, '../../../app.js'));
    const developers = file.__get__("developers")
    expect(developers).toBeTruthy()
    expect(developers).toEqual(["Karla", "Alex", "Joe", "Thomas"])
})

test("You should print a random value from developers array", ()=>{
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');
    const regex = /console\.log\s*\(\s*developers\s*\[\s*(.*)\s*]\s*\)/gm
    expect(regex.test(file.toString())).toBeTruthy();
})