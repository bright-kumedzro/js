/*
Stephen wants to build a very simple tip calculator for whenever he goes eating in a restaurant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300.
If the value is different the tip is 20%.

1. Your task is to calculate the tip depending on the bill value. It's not allowed to use any if-else statements
2. Print a string to the console containing the bill value, the tip and the final value(tip + bill). 
Example, the bill was 275, the tip was 41.25 and the total value 316.25

TEST DATA: Test for bill values 275, 40 and 430.

*/

const bill = 275;

// let tip = (bill > 50 && bill < 300) ?
// `The bill was ${bill}, the tip was ${bill * 0.15} and the total value ${bill + (bill * 0.15)}` : 
// `The bill was ${bill}, the tip was ${bill * 0.2} and the total value ${bill + (bill * 0.2)}`;
// console.log(tip);

let tip = (bill > 50 && bill < 300) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);