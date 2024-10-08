/*function greeting()
{
    console.log("hello world");
}

greeting();
greeting();
*/
/*function greeting(name,city)// name is parameter
{
    console.log(`${name},welcome`);
    console.log(`thank u for coming ${city}`);
}

greeting("faasia","hyderabad");//faasia is argument
greeting("banu","mumbai");
greeting("mahesh");
*/


function calculateSum(min,max)
{
    var sum=0;
   for(let i=min;i<=max;i++)
   {
    sum=sum+i;
   }
   console.log(`sum is ${sum}`);
}
calculateSum(1,10);
