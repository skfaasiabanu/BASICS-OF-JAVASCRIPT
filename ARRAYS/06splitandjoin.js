

//split and join

const word="madam";
const result=word.split("").reverse().join("");
console.log(result);
if(result==word)
{
    console.log("word is palindrome");
}
else{
    console.log("not palindrome");
}


const word1="madam is good";
const result1=word1.split(" ");//according to space the given word is divided into letters and words
console.log(result1);



const word3="madam";
const split1=word3.split("");
console.log(split1);
const join1=split1.join();
console.log(join1);
