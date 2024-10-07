const readlineSync=require("readline-sync");
const number=Number(readlineSync.question("enter  a number"));

if(number%2==0)
{
    console.log(`${number} is even`);
    if(number%4==0)
    {
        console.log(`${number} is divisible by 4`);
    }
    else
    {
        console.log(`${number} is not divisible by 4`);
    }
}
else{
    console.log(`${number} is odd`);
    if(number %5==0)
    {
        console.log(`${number} is divisible by 5`);
    }
    else{
        console.log(`${number} is not divisible by 5`);
    }
}