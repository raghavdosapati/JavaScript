//The JavaScript loops are used to iterate the piece of code using for, while, do while or for-in loops. It makes the code compact. It is mostly used in array.
//for loop --while loop --do-while loop --for-in loop
/* FOR LOOP 
for loop for (initialization; condition; increment)  
{  
    code to be executed  
}
*/
let a=prompt("enter a number")
a=Number.parseInt(a)
for(let i=0;i<6;i++){
    console.log(a);
}

/* WHILE LOOP
while (condition)  
{  
    code to be executed  
}  */
let a=prompt("enter a number")
a=Number.parseInt(a)
let i=0
while(i<a){
    console.log("This is while loop")
    i++;
}

/* DO-WHILE LOOP
do{  
    code to be executed  
}while (condition);*/
let a=prompt("enter a number")
a=Number.parseInt(a)
let i=0
do{
    console.log("This is while loop")
    i++;
}while(i<=a);

/* FOR-IN-LOOP
for i in array,string{
  //body
}
