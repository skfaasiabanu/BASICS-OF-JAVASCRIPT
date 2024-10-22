//DESTRUCTING ARRAYS


//from backend you get data in form of nested objects if i want to store individual objects in different variables we use it
//unpack the objects
const numbers=[1,2,3];
const[a1,b1,c1,courses1]=[1,2,3,["html","css","javascript"]];
console.log(a1);
console.log(b1);
console.log(c1);
console.log(courses1);
const[d, e, f, courses]=[1,2,3,["html","java","css"]];
console.log(d);
console.log(e);
console.log(f);
console.log(courses);

const numbers1=[1,2,3,["html","css","java"],5,6];
const[,,,courses3,a3]=numbers1;
console.log(a3);
console.log(courses3);



const arr=[["html","css","java"],1,2,3,4,5,6];
const [courses4,a4,b4, ...rest]=arr;
console.log(rest);
console.log(courses4);

//swapping
let a=4;
let b=5;
[a,b]=[b,a];
console.log(a);
console.log(b);
