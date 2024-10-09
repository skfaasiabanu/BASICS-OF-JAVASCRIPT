//cases

const messag="iam a STUDENT ";
console.log(messag.toLowerCase());
console.log(messag.toUpperCase());

const message="iam A Student";
const vowels="AEIOU";
let temp;
for(let char of message)
{
    if(vowels.toLowerCase().includes(char.toLowerCase()))
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

