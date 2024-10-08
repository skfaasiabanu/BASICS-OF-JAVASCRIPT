

/*const sum=function(x,y)
{
    return x+y;
}
console.log(sum(2,8));

const add=(x,y)=>//federal function
{
    return x+y;
}
console.log(add(3,7));
*/


const add=(x,y)=>x+y;
console.log(add(3,2));

const sumGreater=(x,y)=>{
    if(x>y)
    {
        return x+y;
    }
    else{
        return x-y;
    }
}


console.log(sumGreater(12,13));
console.log(sumGreater(22,13));



const Sum=(x,y) =>x>y ? x+y : x-y;
console.log(Sum(12,13));