//indexOf method-it returns index of a character in a string

/*const message="iam a student in TEc";
console.log(message.indexOf("s"));
console.log(message.indexOf("a"));
console.log(message.indexOf("a",2));
const index=message.indexOf("T");
console.log(index);
*/

//function

function findCharacter(text,char)
{
    //const index=text.indexOf(char);
    console.log(text.indexOf(char));
}
findCharacter("iam a student","s");


/*function findCharacter(text,char)
{
    const index=text.indexOf(char);
    return index;
}
let result=findCharacter("iam a student","f");
console.log(result);
//if element is not there u index   -1
*/

/*function findCharacter(text,char)
{
    const index=text.indexOf(char);
    if(index==-1)
    return "character not found";
    else
    return "character found";
}
let result=findCharacter("iam a student","s");
console.log(result);*/



//usage of ARROW FUNCTION

/*const findindex=(text,char)=>text.indexOf(char)===-1?"character not found":"character found";
const result=findindex("iam a student","s");
console.log(result);
*/
const findindex=(text,char)=>text.indexOf(char)===-1?console.log("character not found"):console.log("character found");
findindex("iam a student","s");





