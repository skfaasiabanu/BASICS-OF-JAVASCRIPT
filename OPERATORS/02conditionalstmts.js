//conditional statements
/*if(true)
{
    console.log("hello faasia");
}
const a  =true;
if(a)
{
    console.log("hello world");
}

const age=9;
if(age>18)
{
    console.log("you are adult");
}
else{
    console.log("you are child");
}*/

/*const readlineSync=require("readline-sync");
const age=readlineSync.question("how old are you");
if(age>18)
    {
        console.log("you are adult");
    }
    else{
        console.log("you are child");
    }
        */


     const readlineSync=require("readline-sync");
     const number=Number(readlineSync.question("enter a number"));

    /*if(number%3==0)
    {
        console.log("fizz");
    }
    else if(number%5==0)
    {
        console.log("buzz");
    }
        */


    if(number%3==0 && number%5==0)
    {
        console.log("fizz");

    }
    else if(number%3==0 || number%5==0)
    {
        console.log("buzz");
    }
    else if(number%7==0)
    {
        console.log("buzzbuzz");
    }
    else{
        console.log("number is not divisible by anything");
    }