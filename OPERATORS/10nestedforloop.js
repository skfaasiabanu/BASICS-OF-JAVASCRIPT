//nested for loop


//tables program
for(let i=1;i<=10;i++)
{
    for(let j=1;j<=10;j++)
    {
        console.log(`${i} * ${j} = ${i*j}`);
    }
    console.log(".............");
}

//arr=["apple","mango","banana"]
//arr1=["carrot","vegetables"]
arr=["apple","mango","banana"];
arr1=["carrot","vegetables"];
for(let k=0;k<arr.length;k++)
{
    if(arr[k]=="apple")
    {
        console.log("apple is found");
    }
}
for(let s=0;s<arr1.length;s++)
{
    console.log(arr1[s]);
}