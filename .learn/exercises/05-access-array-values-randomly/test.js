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

/*↓↓↓↓↓↓↓↓↓↓↓↓↓↓ TO BE REVIEWED ↓↓↓↓↓↓↓↓↓↓↓↓*/ 

// test("You should use developers.length to generate the random number", ()=>{
//     const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');
//     const regex = /developers\s*\.\s*length/gm;
//     expect(regex.test(file.toString())).toBeTruthy();
// })

test("You should print a random value from developers array between index 0 and the length of the array", ()=>{
    const file = fs.readFileSync(path.resolve(__dirname, '../../../app.js'), 'utf8');
    const regex = /console\.log\s*\(\s*developers\s*\[\s*(.*?)\s*]\s*\)/gm;

    const match = regex.exec(file.toString());

    // If there was no match, the test fails
    expect(match).toBeTruthy();

    const codeToEvaluate = match[1];
    let foundOutOfRangeValue = false;

    // Create a mock developers array
    const developers = ["Karla", "Alex", "Joe", "Thomas"];

    // Mock Math.random to control the value returned
    for(let i = 0; i <= 1; i += 0.01){
        global.Math.random = jest.fn(() => i);

        // Create a new function with the developers array and the code to evaluate
        const func = new Function('developers', `return ${codeToEvaluate}`);

        const evaluatedValue = func(developers);

        if(evaluatedValue < 0 || evaluatedValue > 3){
            foundOutOfRangeValue = true;
            break;
        }
    }

    // The test fails if we found an out of range value
    expect(foundOutOfRangeValue).toBe(false);
})

