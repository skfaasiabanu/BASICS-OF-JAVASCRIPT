//charAt()  charCoddeAt()

//charAt()
const message="iam a student in TEC";
/*console.log(message.charAt(7));
//charAt method return a value when it is calling it their the value is displayed
const index=9;
const char=message.charAt(index);
console.log(char);
//if we didn't give any index it give first value
console.log(message.charAt());
//out of index value it doesn't give error but gives empty string
console.log(message.charAt(100));
*/


//charCodeAt()
//it returns ASCII code
//where the character everything on the keyboard has some ascii value


/*const index=0;
console.log(message.charCodeAt(index));
const symbol="&";
console.log(symbol.charCodeAt());
*/

const index=3;
console.log(`the ascii code at ${message.charAt(index)} is ${message.charCodeAt(index)}`);



//exercise to encod
//geeks--iffmu

const exercise="geeks";
var i;
//let value=exercise.charCodeAt();
for(i=0;i<exercise.length;i++)
{
    console.log(exercise.charCodeAt(i));
}