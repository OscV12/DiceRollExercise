const { rollDice } = require("./exercise8.js");

// Testing a single example
const result = rollDice(6);
if (result > 6 || result < 1) {
  throw Error("Invalid dice result " + result);
}

// Unit tests - testing dice sides from 1 to 100
for (let i = 1; i < 100; i++) {
  let testResult = rollDice(i);
  if (testResult > i || testResult < 1)
    throw Error("Invalid dice result " + testResult + " for max " + i);
}

console.log("All tests passed!");
