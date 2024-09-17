const input=require("readline-sync");
const userName=input.question("may i know your name");
const age=input.question("may i know your age");
console.log(userName);
console.log(typeof userName);
console.log(age);
console.log(typeof age);
console.log("Welcome "+userName+" to GFG");
console.log(`welcome ${userName} to GFG `);
console.log("thanku for letting ur age");
const yearOfBirth=2024+Number(age);
console.log(`you were born in the year ${yearOfBirth}`);
//now default of a variable is text that is string