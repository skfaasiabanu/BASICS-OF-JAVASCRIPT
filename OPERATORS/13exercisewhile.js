let readlineSync=require("readline-sync");
let number=readlineSync.question("enter a number less than 50");
console.log(number);
while(number>50)
{
    number=readlineSync.question("enter number less than 50 -");

}
console.log("number accepted");