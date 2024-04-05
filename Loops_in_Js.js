/*for-loop
  same initialization as java
  for(initialization;condition;incrementor decrement)
    //for loop body
*/
let n=prompt("enter a number :")
n=Number.parseInt(n);
for(let i=0;i<n;i++){
  console.log(i)
}

//Que-WRITE A JS PROGRAM TO CONSOLE SUM OF N NATURAL NUMBERS
let sum=0
let num=prompt("enter a number :")
num=Number.parseInt(num);
for(let i=0;i<num;i++){
  sum+=i;
}
console.log(sum)

//Que- WRITE A FACTORIAL PROGRAM USING FOR LOOP
let fac=1
let a=prompt("enter a number :")
a=Number.parseInt(a)
for(let i=a;i>0;i--){
  fac=fac*i;
}
console.log(fac)

//WAY-2    FOR IN LOOP
const obj={
  name:"raghav",
  sec:"a",
  num:873894
}
console.log(obj['sec'])
for(let m in obj){
  console.log("to print keys of obj:"+m +",to print values of obj "+obj[m])
}

//WAY-3    FOR OF LOOP
let va="RAGHAV"
for(let b of va){
  console.log(b)
}
