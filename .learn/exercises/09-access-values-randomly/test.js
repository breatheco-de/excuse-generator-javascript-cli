const fs = require('fs');
const path = require('path');
const rewire = require('rewire');

test("The arrays who, what, and when should exist with the indicated elements", ()=>{
    const file = rewire(path.resolve(__dirname, '../../../app.js'));

    const who = file.__get__("who");
    const what = file.__get__("what");
    const when = file.__get__("when");

    // Check that the arrays exist
    expect(who).toBeTruthy();
    expect(what).toBeTruthy();
    expect(when).toBeTruthy();

    // Check that the arrays contain the expected elements
    expect(who).toEqual(['The dog','My granma','His turtle','My bird']);
    expect(what).toEqual(['ate','pissed','crushed','broked']);
    expect(when).toEqual(['before the class','right in time','when I finished','during my lunch','while I was praying']);
})

test("You should be generating a random index for each array", ()=>{
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');

    const regexWho = /let\s+(\w+)\s*=\s*Math\s*\.floor\s*\(\s*Math\s*\.random\s*\(\s*\)\s*\*\s*who\.length\s*\)\s*;?/gm;
    const regexWhat = /let\s+(\w+)\s*=\s*Math\s*\.floor\s*\(\s*Math\s*\.random\s*\(\s*\)\s*\*\s*what\.length\s*\)\s*;?/gm;
    const regexWhen = /let\s+(\w+)\s*=\s*Math\s*\.floor\s*\(\s*Math\s*\.random\s*\(\s*\)\s*\*\s*when\.length\s*\)\s*;?/gm;

    let hasWhoIndex = regexWho.test(file.toString());
    let hasWhatIndex = regexWhat.test(file.toString());
    let hasWhenIndex = regexWhen.test(file.toString());

    expect(hasWhoIndex && hasWhatIndex && hasWhenIndex).toBeTruthy();
});

test("Random value from each array should be printed", ()=>{
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');
    
    const whoRegex = /console\.log\(\s*who\[\s*(?!\d)\w+\s*]\s*\)/gm;
    const whatRegex = /console\.log\(\s*what\[\s*(?!\d)\w+\s*]\s*\)/gm;
    const whenRegex = /console\.log\(\s*when\[\s*(?!\d)\w+\s*]\s*\)/gm;

    expect(whoRegex.test(file.toString())).toBeTruthy();
    expect(whatRegex.test(file.toString())).toBeTruthy();
    expect(whenRegex.test(file.toString())).toBeTruthy();
})
