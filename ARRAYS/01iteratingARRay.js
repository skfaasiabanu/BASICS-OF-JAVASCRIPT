//Arrya->non primitive data types
//60 students ->60 variables->60 memory blocks
//to overcome this we use arrays

let studentName=["faasia","navya","suhana","jimjam",1,2,3,4,["HTML","CSS"],{STUDENT:"FAASIA"}];
//this array can be added with 60 students
/*console.log(studentName);
//ARRAY CAN STORE STRINGS,NUMBER,ANOTHER ARRAY,OBJECT
console.log(studentName[0]);//here we get single word but not in a single character just like string
for(let i=0;i<studentName.length;i++)//here dynamically we are changing the nof of elements in array
{
    console.log(studentName[i]);
}
*/
//for let of->used when there is no involvement of index

for(let name of studentName)
{
    console.log(name);
}

//for let in->give me index
/*for(let nam in studentName)
{
   console.log(nam);   
}

for(let index in studentName)
    {
       console.log(studentName[index]);   
    }
       */