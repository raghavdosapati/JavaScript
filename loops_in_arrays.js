// general for loop
let array=[1,2,3,4,5,6]
for(let ind=0;ind<array.length;ind++){
  console.log(array[i])
}

// for-Each loop
let arr=[1,2,3,4,5]
arr.forEach((ele)=>{
    console.log(ele)    // 1  2 3 4 5
})

//Array From in javascript
let name="Array"
let arr2=Array.from(name)
console.log(arr2)   // ['A','r','r','a','y']

// for-of in javascript
// for-of is used to get the values of the array
let array1=[533,35,74,63,603]
for(let li of array1){
  console.log(li)  // 533 35 74 63 603
}

//for-in in javascript
// for-in uses to retrieve the keys of an array
let arr=[533,35,74,63,603]
for(let x in array1){
  console.log(x)    // 0 1 2 3 4 
}
