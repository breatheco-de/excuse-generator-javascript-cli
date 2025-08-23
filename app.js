// JavaScript file
function generateExcuse() {
    let who = ['the dog', 'my grandma', 'his turtle', 'my bird'];
    let what = ['ate', 'pissed on', 'crushed', 'broke'];
    let when = ['before the class', 'right in time', 'when I finished', 'during my lunch', 'while I was praying'];

    // Generate a random index for each list
    let whoIndex = Math.floor(Math.random() * who.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    // Concatenate the elements to form the excuse
    let excuse = `${who[whoIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
    return excuse;
}

// Print excuse
console.log(generateExcuse());

