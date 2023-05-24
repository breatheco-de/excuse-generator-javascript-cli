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
