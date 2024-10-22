//array methods->push &concat
//mutable object->changed
//immutable object->unchanged


let fruits=["apple","banana","mango"];
console.log(fruits);
fruits.push("orange");
console.log(fruits);
//we can add multiple elements by using push
fruits.push("grapes","kiwi","jackfruit");
console.log(fruits);

//concat method
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=arr1.concat(arr2);
console.log(arr3);
let arr11=[1,2,3];
let arr12=[4,5,6];
let arr13=[7,8,9];
let arr4=arr1.concat(arr2,arr13);
console.log(arr4);

let arr5=arr1.concat(arr2,arr3,arr11,arr12,arr13);
