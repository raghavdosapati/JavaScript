//console object has myltiple methods
console.log("hey hello javascrpt")

alert("hey welcome")

let a=prompt("hey browser")
document.write(a)

console.warn("Warning do not write much code for javascript")

console.error("Error occurred ")

console.info("give info")

console.assert(5>53)  //assertion failed
console.assert(32>4)   //assertion true

console.clear()  //clear all the  console

obj={a:4,b:5,c:6}
console.table(obj)

console.time("forLoop")
for(let i=0;i<7;i++){
  console.log(i)
}
console.timeEnd("forLoop")
