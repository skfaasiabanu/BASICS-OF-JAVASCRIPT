//copying an array

//if same memory is managed the only in-built operations are effected in both the arrays
let arr1=[1,2,3];//is rrefering to memory location --ab123
let arr2=arr1;
//is also pointing/refering to same memory location
//arr2 is not creating new memory location
//shallow copy
console.log(arr1);
console.log(arr2);

arr2.push(4);//if we push in arr2 it will be updated to arr1 also
console.log(arr2);
console.log(arr1);


//spread operator
let arr3=[...arr1];
console.log(arr3);
arr3.push(5);
console.log(arr1);
console.log(arr3);//in spreading array the original array is not affected by push opertaion


//for loop
let arr4=[1,2,3,4];
let arr5=[];
for(let number of arr4)
{
    arr5.push(number);
}
console.log(arr4);
console.log(arr5);
arr5.push(5);
console.log(arr4);
console.log(arr5);



let str="faasia";
let arrOfAlpha=[...str];
console.log(arrOfAlpha);