let arr=[2,3,4,5,'r','arr']
let nums=[1,3,433,32,'num']
console.log(arr.concat(nums))
console.log("---------------------")
var aa=["AngularJS","Node.js","JQuery","Bootstrap"]
aa.push(23)
console.log(aa)
console.log("-------------------")
aa.unshift(12)
aa.unshift(22)
console.log(aa)
aa.shift(2)
console.log(aa)
console.log("-------------------")
aa.sort()
console.log(aa)
console.log("-------------------")
console.log("The JavaScript array splice() method is used to add/remove the elements to/from the existing array")
arr.splice(2,2,44,45)
console.log(arr)
console.log("-------------------")
arr.pop()
console.log(arr)
console.log("-------------------")
nums.reverse()
console.log(nums)
console.log("-------------------")
//map
var array=[1,2,3,4]
var res=array.map(x=>x*6);
console.log(res)
console.log("-------------------")
let vam=[1,2,4,66]
var r=vam.fill(2,0,2)
console.log(r)
