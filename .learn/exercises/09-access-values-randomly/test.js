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

let buffer = "";
global.console.log = jest.fn((text) => buffer += text + "\n");


test('Only three unique values from the arrays should be printed to the console', () => {
    require("../../../app.js");

    // Split the buffer into lines
    const lines = buffer.trim().split("\n");

    // Check if there are exactly three lines printed
    expect(lines.length).toBe(3);

    const who = ['The dog','My granma','His turtle','My bird'];
    const what = ['ate','pissed','crushed','broked'];
    const when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

    let uniqueWho = false;
    let uniqueWhat = false;
    let uniqueWhen = false;

    // Check if each line matches a value from the arrays
    lines.forEach((line) => {
        if (who.includes(line) && !uniqueWho) {
            uniqueWho = true;
        } else if (what.includes(line) && !uniqueWhat) {
            uniqueWhat = true;
        } else if (when.includes(line) && !uniqueWhen) {
            uniqueWhen = true;
        }
    });

    // Check if all three arrays have unique values
    expect(uniqueWho && uniqueWhat && uniqueWhen).toBeTruthy();
});


