// const rewire = require('rewire');

let buffer = "";
global.console.log = console.log = jest.fn((text) => buffer += text + "\n");

test('You have to call console.log() with "Hello world" as value', () => {
    const file = require("../../../app.js");
    expect(buffer.includes("Hello world\n")).toBe(true);
})