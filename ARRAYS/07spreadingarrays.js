//spread array
//spread-mutation
 

const arr=[1,2,3,4,5];
console.log(...arr);//->this is not arrray
console.log(arr);//but this is array


const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,10];
const arr3=[...arr1,...arr2];
console.log(arr3);



const arr11=[1,2,3,4,5];
const arr21=[8,9];
const arr31=[...arr11,6,7,...arr21,10,11];//it will not change existing array
console.log(arr31);