//sum of numbers from 1 to 20
//it is functional programming
function sum(min,max)
{
    let add=0;
    for(let i=min;i<=max;i++)
    {
        add=add+i;
    }
    return add;
}

const result=sum(1,20);
console.log(result);