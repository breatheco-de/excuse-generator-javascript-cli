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

