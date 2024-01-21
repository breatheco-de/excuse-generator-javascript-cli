let whotoblame = ["the dog", "my gramma", "the cat", "your mama"];
let whattheydid = ["eat", "pissed", "crushed", "broke"];
let whatdoyouwanttoavoid = [
  "my homework",
  "the project",
  "the model",
  "the book",
];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my breakfast",
  "during sleep",
  "michi",
];

for (let i = 1; i < 9; i++) {
  let domain =
    i +
    " " +
    whotoblame[Math.floor(Math.random() * whotoblame.length + 0)] +
    " " +
    whattheydid[Math.floor(Math.random() * whattheydid.length + 0)] +
    " " +
    whatdoyouwanttoavoid[
      Math.floor(Math.random() * whatdoyouwanttoavoid.length + 0)
    ] +
    " " +
    when[Math.floor(Math.random() * when.length + 0)];

  console.log(domain);
}