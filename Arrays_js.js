//Arrays are mutable in javascript
let arr=['raghav',22,2,34,5,3,5,6,null]
console.log(arr)
console.log(typeof arr)
console.log("------------")
// we can add the values to the array it will be added to the end of the array
console.log('printing array using for loop')
for(let ind=0;ind<arr.length;ind++){
    console.log(arr[ind]+"\n")
}
console.log("------------")
//lets try to take the input from user
let n=prompt('enter n')
let nums=new Array(n)
for(let i=0;i<n;i++){
    nums[i]=prompt("enter value "+i+"=")
}
console.log(nums)
console.log("------------")
