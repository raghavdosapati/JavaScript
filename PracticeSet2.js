/*
write a javascript program to print the marks of a student
*/
let marks = {
  raghav:32,
  anirudh : 65,
  maya:74,
  deepu : 56
}
//for loop to iterate through marks
for(let i=0;i<Object.keys(marks).length;i++){
  console.log(" The marks of ",Object.keys(marks)[i],"is",marks[Object.keys(marks)[i]])
}

//problem no.2 -- write a js program which returns mean of the numbers and write this mean function in arrow functions
const mean =(a, b, c, d)=>{
  return (a+ b+ c+ d)/4
}
// let a =prompt("enter 1st number")
// let b =prompt("enter 2nd number")
// let c =prompt("enter 3rd number")
// let d =prompt("enter 4th number")
console.log("the mean of numbers are"+mean(2, 2, 3, 3))
