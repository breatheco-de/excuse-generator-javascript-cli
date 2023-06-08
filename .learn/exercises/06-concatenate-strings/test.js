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

test("You should have an array called developers", ()=>{
    const file = rewire(path.resolve(__dirname, '../../../app.js'));
    const developers = file.__get__("developers")
    expect(developers).toBeTruthy()
})

test("Developers array should have the indicated elements", ()=>{
    const file = rewire(path.resolve(__dirname, '../../../app.js'));
    const developers = file.__get__("developers")
    expect(developers).toEqual(["Karla", "Alex", "Joe", "Thomas"])
})

test("You should have an array called jobTitle", ()=>{
    const file = rewire(path.resolve(__dirname, '../../../app.js'));
    const jobTitle = file.__get__("jobTitle")
    expect(jobTitle).toBeTruthy()
})

test("jobTitle array should have the indicated elements", ()=>{
    const file = rewire(path.resolve(__dirname, '../../../app.js'));
    const jobTitle = file.__get__("jobTitle")
    expect(jobTitle).toEqual(["Software developer", "Technical lead", "Data scientist", "CTO"])
})


let buffer = "";
global.console.log = console.log = jest.fn((text) => buffer += text + "\n");

test("Printed sentence should be a valid combination of developers and jobTitles", () => {

    // Run the student's script
    require("../../../app.js");

    // Check whether the printed sentence is a valid combination of developers and jobTitles
    const file = rewire(path.resolve(__dirname, '../../../app.js'));
    const developers = file.__get__("developers")
    const jobTitle = file.__get__("jobTitle")

    let combinations = new Set();
    for(let developer of developers){
        for(let job of jobTitle){
            combinations.add(`${developer} is our ${job}`);
        }
    }
  
    let printedSentence = buffer.trim()

    expect(combinations.has(printedSentence)).toBe(true);

});


test('You should print a random value from developers and jobTitle array', () => {
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');
    const regex_console = /console\.log\s*\(\s*([a-zA-Z_$][0-9a-zA-Z_$]*)\s*(?:\[\s*Math\.floor\s*\(\s*Math\.random\s*\(\s*\)\s*\*\s*\1\.length\s*\)\s*\]|\s*)\s*\+\s*" is our "\s*\+\s*([a-zA-Z_$][0-9a-zA-Z_$]*)\s*(?:\[\s*Math\.floor\s*\(\s*Math\.random\s*\(\s*\)\s*\*\s*\2\.length\s*\)\s*\]|\s*)\s*\)/gm;

    const consoleUsage = regex_console.test(file.toString());
    expect(consoleUsage).toBeTruthy();
})
