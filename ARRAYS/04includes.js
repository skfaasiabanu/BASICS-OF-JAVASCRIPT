//includes method


const availablesizes=["S","M","L","XL","XXL","XXXL"];
const readlineSync=require("readline-sync");
const usersize=readlineSync.question("which size u required");

//const isSizeAvailable=availablesizes.includes(usersize);
//console.log(isSizeAvailable);
if(availablesizes.includes(usersize))
{
    console.log("size is available");
}
else{
    console.log("size is unavailable");
}