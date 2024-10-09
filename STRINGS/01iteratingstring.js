//iterating string

/*let message="iam a student in geeks for geeks";

for(let char of message)
{
    console.log(char);
}
*/
    /*let message="iam a student in geeks for geeks";

    for(let char of message)
    {
        if(char==="n"){
            break;
        }
        else{
            console.log(char);
        }
    }
        */
    /*let message="iam a student in geeks for geeks";
let count=0;
    for(let char of message)
    {

        if(char==="a"){
            count++;
        }
        
    }
    console.log(count);*/





//character a letter,space,symbols anything
    /*let message="iam a student in geeks for geeks";
    console.log(message[0]);
    console.log(message[1]);
    console.log(message[2]);
    console.log(message[3]);
    console.log(message[4]);
    for(let i=0;i<message.length;i++)
    {
        console.log(message[i]);
    }
        */


    //to find a letter in a statement
    /*let message="iam a student in geeks for geeks";
    for(let i=0;i<message.length;i++)
        {
            if(message[i]==="n")
            {
                console.log(i);
            }
        }

        */




       
       let message="faasia";
        let vowels = '';
const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

for (let char of message) {
    if (vowelSet.has(char)) {
        vowels += char;
    }
}

console.log(vowels);