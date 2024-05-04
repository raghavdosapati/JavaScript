// map ---
//JavaScript array map() method calls the specified function for every array element and returns the new array. This method doesn't change the original array.

var arr=[2.1,3.5,4.7];  
var result=arr.map(Math.round);  
console.log(result);    //[2,3,4]


// filter----
//The JavaScript array filter() method filter and extract the element of an array that satisfying the provided condition. It doesn't change the original array.
let marks=[50,40,4,37,2];  
function check(value)  
{  
  return value>30;    
}  
console.log(marks.filter(check));    //[50,40,37]

//reduce
// The reduce() method reduces the given array into a single value by executing a reducer function. The user implements the reducer function that works on every element present in the array.
let num=[1,2,3,4,5,6]
let arr2=num.reduce((x1,x2)=>{
  return x1+x2;
})
console.log(arr2)    //21
