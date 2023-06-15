const fs = require('fs');
const path = require('path');
const rewire = require('rewire');

test("The who array should exist", () => {
    const file = rewire(path.resolve(__dirname, '../../../app.js'));
    const who = file.__get__("who");
    expect(who).toBeTruthy();
});

test("The who array should have the indicated elements", () => {
    const file = rewire(path.resolve(__dirname, '../../../app.js'));
    const who = file.__get__("who");
    expect(who).toEqual(['The dog','My granma','His turtle','My bird']);
});

test("The what array should exist", () => {
    const file = rewire(path.resolve(__dirname, '../../../app.js'));
    const what = file.__get__("what");
    expect(what).toBeTruthy();
});

test("The what array should have the indicated elements", () => {
    const file = rewire(path.resolve(__dirname, '../../../app.js'));
    const what = file.__get__("what");
    expect(what).toEqual(['ate','pissed','crushed','broked']);
});

test("The when array should exist", () => {
    const file = rewire(path.resolve(__dirname, '../../../app.js'));
    const when = file.__get__("when");
    expect(when).toBeTruthy();
});

test("The when array should have the indicated elements", () => {
    const file = rewire(path.resolve(__dirname, '../../../app.js'));
    const when = file.__get__("when");
    expect(when).toEqual(['before the class','right in time','when I finished','during my lunch','while I was praying']);
});


test("You should generate a random index for the who array", () => {
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');
    const regexWho = /Math\s*\.random\s*\(\s*\)\s*\*\s*who\.length\s*\)\s*;?/gm;
    const hasWhoIndex = regexWho.test(file.toString());
    expect(hasWhoIndex).toBeTruthy();
});

test("You should generate a random index for the what array", () => {
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');
    const regexWhat = /Math\s*\.random\s*\(\s*\)\s*\*\s*what\.length\s*\)\s*;?/gm;
    const hasWhatIndex = regexWhat.test(file.toString());
    expect(hasWhatIndex).toBeTruthy();
});

test("You should generate a random index for the when array", () => {
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');
    const regexWhen = /Math\s*\.random\s*\(\s*\)\s*\*\s*when\.length\s*\)\s*;?/gm;
    const hasWhenIndex = regexWhen.test(file.toString());
    expect(hasWhenIndex).toBeTruthy();
});

test("A random value from the who array should be generated", () => {
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');
    const whoRegex = /who\[\s*(?!\d)\w+\s*]\s*/gm;
    expect(whoRegex.test(file.toString())).toBeTruthy();
});

test("A random value from the what array should be generated", () => {
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');
    const whatRegex = /what\[\s*(?!\d)\w+\s*]\s*/gm;
    expect(whatRegex.test(file.toString())).toBeTruthy();
});

test("A random value from the when array should be generated", () => {
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');
    const whenRegex = /when\[\s*(?!\d)\w+\s*]\s*/gm;
    expect(whenRegex.test(file.toString())).toBeTruthy();
});


test("You should create an 'excuse' variable", ()=>{
    const file = rewire(path.resolve(__dirname, '../../../app.js'));
    const excuse = file.__get__("excuse");
    
    // Check if 'excuse' variable exists and it's a string
    expect(excuse).toBeTruthy();
    expect(typeof excuse).toBe('string');
});


let buffer = "";
global.console.log = console.log = jest.fn((text) => buffer += text + "\n");

test("The value of excuse variable should match one of all possible combinations", ()=>{
    // Run the student's script
    require("../../../app.js");

    // Check whether the printed sentence is a valid combination
    const file = rewire(path.resolve(__dirname, '../../../app.js'));
    const who = ['The dog','My granma','His turtle','My bird']
    const what = ['ate','pissed','crushed','broked']
    const when = ['before the class','right in time','when I finished','during my lunch','while I was praying']

    const excuse = file.__get__("excuse")

    let combinations = new Set();
    for(let wh of who){
        for(let wt of what){
            for(let wn of when){
                combinations.add(`${wh} ${wt} ${wn}`);
            }
        }
    }
  
    let printedSentence = excuse.trim()

    expect(combinations.has(printedSentence)).toBe(true);
});

test("You should print the 'excuse' variable", ()=>{
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');

    // Pattern: console.log(excuse);
    const regexLogExcuse = /console\.log\s*\(\s*excuse\s*\)\s*;?/gm;
    let hasLogExcuseStatement = regexLogExcuse.test(file.toString());

    expect(hasLogExcuseStatement).toBeTruthy();
});

