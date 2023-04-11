const fs = require('fs');
const path = require('path');

test('app.js file should exist in your root directory', () => {
    let fileExists = false;

    if(fs.existsSync(path.resolve('./app.js'))){
        fileExists = true;
    }

    expect(fileExists).toBeTruthy();
})