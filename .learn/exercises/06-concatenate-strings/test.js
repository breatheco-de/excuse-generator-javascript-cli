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

test("You should have an array called jobTitle with the indicated elements", ()=>{
    const file = rewire(path.resolve(__dirname, '../../../app.js'));
    const jobTitle = file.__get__("jobTitle")
    expect(jobTitle).toBeTruthy()
    expect(jobTitle).toEqual(["Software developer", "Technical lead", "Data scientist", "CTO"])
})


test('You should be using string concatenation in a specific manner', () => {
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');

    // Pattern 1: developers[Math.floor(Math.random() * developers.length)] + " is our " + jobTitle[Math.floor(Math.random() * jobTitle.length)]
    const regex1 = /(\w+)\[Math\.floor\(Math\.random\(\) \* \1\.length\)\] \+ " is our " \+ (\w+)\[Math\.floor\(Math\.random\(\) \* \2\.length\)\]/gm;

    // Pattern 2: variable assignment then concatenation
    const regexVarAssign = /let\s+(\w+)\s*=\s*(\w+)\[Math\.floor\(Math\.random\(\)\s*\*\s*\2\.length\)\]/gm;
    const regexConcat = /\s*(\w+)\s*\+\s*" is our "\s*\+\s*(\w+)/gm;

    // Check if file content matches either of the correct styles
    let hasStyle1 = regex1.test(file.toString());
    let hasStyle2 = regexVarAssign.test(file.toString()) && regexConcat.test(file.toString());

    expect(hasStyle1 || hasStyle2).toBeTruthy();
});




let buffer = "";
global.console.log = console.log = jest.fn((text) => buffer += text + "\n");

test("You should print a random sentence with the given format using both arrays", ()=>{
    const file = require("../../../app.js");
    let regex = /^([\w\s]+) is our ([\w\s]*[\w][\w\s]*)$/

    expect(regex.test(buffer)).toBe(true);
})