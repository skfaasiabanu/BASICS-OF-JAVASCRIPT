//ARRAY SORT

const fruits=["apple","cherry","orange","banana","ball"];
fruits.sort();
//sort will change the array that is mutable
//here characters are in numbers or unicode and compare
console.log(fruits);

//sort can sort for single digit numbers
/*const numbers=[3,6,1,2,8,45,9,23,78];
numbers.sort();
console.log(numbers);
*/

// to sort them
const numbers=[3,6,1,2,8,45,9,23,78];
function sortAscending(a,b)
{
    return a-b;
}
numbers.sort(sortAscending);
console.log(numbers);
function sortDscending(a,b)
{
    return b-a;
}
numbers.sort(sortDscending);
console.log(numbers);