//star pattern
/*    *
      *  *
      *  *   *
      *  *   *   *
      *  *   *   *   *
*/


//const symbole="* ";
/*console.log(symbole.repeat(1));
console.log(symbole.repeat(2));
console.log(symbole.repeat(3));
console.log(symbole.repeat(4));
console.log(symbole.repeat(5));*/



/*for(let i=0;i<6;i++)
{
    console.log(symbole.repeat(i));
}




for(let j=4;j>0;j--)
{     
    console.log(symbole.repeat(j));
}
*/



/*const userName="shaik faasia banu";
console.log(userName.length);

//no of characters
count=0;
for(let i=0;i<userName.length;i++)
{count++;
}
console.log(`the character count of the string is ${count}`);
*/


//range of numbers from 1 to 101
//2,4,6,8

/*for(let i=1;i<=100;i++)
{
    if(i%2==0)
    {
       console.log(`even number ${i}`);
    }
    else
    {
        console.log(`odd number ${i}`);
    }
}
    */

const string="helloiloveyou";
const vowels="aeiou";
for(let i=0;i<string.length;i++)
{
    if(vowels.includes(string[i]))
    {
        console.log(`${string[i]} is a vowel`);
    }
    else
    {
        console.log(`${string[i]} is not  a vowel`);
    }
}