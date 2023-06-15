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
