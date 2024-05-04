/*
function functionName([arg1, arg2, ...argN]){  
 //code to be executed  
}  
*/
// javascript are a block of code designed to perform a particular task
function marks(a,b){
  return 1/2*a+b*3/4
}
let a =prompt("enter a number")          //its a function which re5ut
let b = prompt("enter another number")
console.log(marks(a,b))

// we can declare variables to assign functions
var add=new Function("num1","num2","return num1+num2");  
console.log(add(2,5));


// --ARROW FUNCTIONS
/*An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:*/
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]

   //OR
const sheet =(a, b, c, d)=>{
  return (a+ b+ c+ d)/(a+b)
}
console.log(sheet(2, 3, 4, 5))
