const readlineSync=require("readline-sync");
const string1=readlineSync.question("enter string 1");
const string2=readlineSync.question("enter string 2");
const string3=readlineSync.question("enter string 3");

if(string1.length<string2.length &&string1.length<string3.length )
{
    console.log(`${string1} is smallest string`);
}
else if(string2.length<string1.length &&string2.length<string3.length)
{
    console.log(`${string2} is smallest string`)
}
else if(string3.length<string1.length &&string3.length<string2.length)
    {
        console.log(`${string3} is smallest string`)
    }
    else {
        console.log("found 2 strings are smaller");
    }