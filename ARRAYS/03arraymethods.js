

let courses=["html","css","javascript","reactjs","jquery","bootstrap"];
console.log(courses);
let removedItem=courses.pop();
console.log(removedItem);
console.log(courses);
//pop is used to delete last element 

let removeItem=courses.pop();
console.log(removeItem);
console.log(courses);



//slice returns value to be deleted but action doesn't take place in array
//not deleting original array but shallow copy of it
let value=courses.slice(1,4);//->3 index value  but not 4
console.log(value);
console.log(typeof value);
console.log(courses);




let sname="prakesh";
let result=sname[0].toUpperCase();
//console.log(result);
let capitalize=result+sname.slice(1);
console.log(capitalize);


let sname1="PRAKASH";
let result1=sname1[0].toUpperCase();
//console.log(result);
let capitalize1=result1+sname1.slice(1).toLowerCase();
console.log(capitalize1);






//splice->useing this we can add or delete a element


//courses.splice(3,2);//it mean from index 3 delete 2 elements
//console.log(courses);

courses.splice(3,1,"faasia");//after 3rd index add faasia
console.log(courses);

