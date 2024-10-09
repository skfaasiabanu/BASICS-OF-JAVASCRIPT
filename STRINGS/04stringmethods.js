//includes() method->it always return boolean value

/*const message="i love code in  light mode";
if(message.includes("light")){
    console.log("person like to study in light mode");
}
else
{
    console.log("person like to study in dark mode");
}
    */



/*const message="i am a student in TEC";
const vowels="aeiouAEIOU";
for(let char of message)
{
    if(vowels.includes(char)){
        console.log(`${char} is vowel`);
    }
    else{
        console.log(`${char} is not vowel`);
    }
}
    */
   //vowels in a message
  /* const message="i am a student in TEC";
const vowels="aeiouAEIOU";
let count="";
for(let char of message)
{
    if(vowels.includes(char)){
       count=count+char;
    }
}
console.log(count);
*/

//just to check a stmt contain vowels or not
const message="iam a student";
const vowels="aeiouAEIOU";
let temp;
for(let char of message)
{
    if(vowels.includes(char))
    {
        temp=true;
    break;
    }
    else
    {
    temp=false;
    }
}
if(temp)
{
    console.log("statement contain vowels");
}
    else{
        console.log("statement does not contain vowels");
    }

